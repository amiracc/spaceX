import { useState, useEffect } from "react";
import { useLaunches } from "../hooks/useLaunches";
import {
  Box,
  Image,
  Spinner,
  Text,
  Center,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { SearchBar, Filter, LaunchList, Favorites } from "../components";
import { SanitizedLaunch } from "../interfaces";
import spaceXLogo from "../spacex.png";

export const LaunchPage = () => {
  const styles = useMultiStyleConfig("LaunchPage");

  const { data: launches, isLoading, error } = useLaunches();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Using Set instead of array in a few places for handling uniquness and
  // efficiency when it comes to looking up for/removing etc. a value

  // When we know we will reuse these functions, some parts might be moved to utils, in this case we do not

  // Getting the favorites out of local storage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteLaunches");
    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }
  }, []);

  // Search and filter
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleYearFilter = (values: string[]) => {
    setSelectedYears(values);
  };

  const filterYears = Array.from(
    new Set(launches?.map((launch) => launch?.launch_year))
  ).sort((a, b) => a - b);

  const filteredLaunches = launches?.filter((launch) => {
    const searchLaunches = launch?.mission_name
      .toLowerCase()
      .includes(searchTerm);

    const filteredLaunches =
      selectedYears.length > 0
        ? selectedYears.includes(launch?.launch_year.toString())
        : true;

    return searchLaunches && filteredLaunches;
  });

  // Handle favorites by updating the localStorage
  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      if (updatedFavorites.has(id)) {
        updatedFavorites.delete(id);
      } else {
        updatedFavorites.add(id);
      }

      localStorage.setItem(
        "favoriteLaunches",
        JSON.stringify(Array.from(updatedFavorites))
      );

      return updatedFavorites;
    });
  };

  const favoriteLaunches: SanitizedLaunch[] = launches
    ? launches.filter((launch) => favorites.has(launch.id))
    : [];

  return (
    <Box sx={styles.container}>
      <Image src={spaceXLogo} alt="Logo" boxSize={100} sx={styles.logo} />
      <Box sx={styles.background} />
      <Box sx={styles.infoContainer}>
        <Box sx={styles.infoWrapper}>
          <SearchBar initialValue={searchTerm} onSearchChange={handleSearch} />
          <Favorites favoriteLaunches={favoriteLaunches} />
          <Filter
            years={filterYears}
            onYearChange={handleYearFilter}
            selectedYears={selectedYears}
          />
        </Box>

        {/* Handling possible error or longer loading times of the data */}
        {error && (
          <Center sx={styles.center}>
            <Text sx={styles.error}>
              Opps! There is an error, please contact support.
            </Text>
          </Center>
        )}

        {isLoading && (
          <Center sx={styles.center}>
            <Spinner size="xl" color="white" sx={styles.spinner} />
          </Center>
        )}

        {!error && !isLoading && (
          <LaunchList
            launches={filteredLaunches}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </Box>
    </Box>
  );
};
