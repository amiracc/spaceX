import { extendTheme } from "@chakra-ui/react";
import LaunchCard from "./styles/launchCard";
import LaunchList from "./styles/launchList";
import LaunchPage from "./styles/launchPage";
import Favorites from "./styles/favorites";
import SearchBar from "./styles/searchBar";
import Filter from "./styles/filter";

const theme = extendTheme({
  components: {
    LaunchCard,
    LaunchList,
    LaunchPage,
    Filter,
    SearchBar,
    Favorites,
  },
});

export default theme;
