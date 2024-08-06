import { useState, useEffect } from "react";

import {
  Box,
  Image,
  Flex,
  Text,
  useBreakpointValue,
  Spinner,
  Tag,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import { SanitizedLaunch } from "../../interfaces";
import { StarIconOutline, StarIcon } from "../../ui";

export interface LaunchCardProps {
  launch: SanitizedLaunch;
  hasFavorite?: boolean;
  favorites?: Set<string>;
  onToggleFavorite?: (id: string) => void;
}

// Mapping for the tag (status) colors
const statusMap: Record<string, { label: string; color: string }> = {
  Success: { label: "Success", color: "#5AD058" },
  Failure: { label: "Failure", color: "#E33636" },
  Unknown: { label: "Unknown", color: "#9C9C9C" },
};

export const LaunchCard = ({
  launch,
  favorites,
  hasFavorite = true,
  onToggleFavorite,
}: LaunchCardProps) => {
  const [loading, setLoading] = useState(true);

  const isMobile = useBreakpointValue({ base: true, md: false });

  // Handle cases when the image haven't loaded yet; in a complex (e-com) application I use lazy loading for images
  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
  }, [launch.mission_patch]);

  const getStatusDetails = (status: boolean | null) => {
    switch (status) {
      case true:
        return statusMap.Success;
      case false:
        return statusMap.Failure;
      case null:
      default:
        return statusMap.Unknown;
    }
  };

  const tagColor = getStatusDetails(launch?.status).color;

  const isFavorite = favorites?.has(launch?.id);

  const styles = useMultiStyleConfig("LaunchCard", {
    isMobile,
    tagColor,
  });

  return (
    <Box sx={styles.container}>
      <Flex sx={styles.flexWrapper}>
        {hasFavorite && (
          <Box
            sx={styles.favouriteIconWrapper}
            onClick={() => onToggleFavorite && onToggleFavorite(launch?.id)}
          >
            {isFavorite ? <StarIcon /> : <StarIconOutline />}
          </Box>
        )}

        {loading && <Spinner size="lg" color="black" />}

        <Image
          src={launch?.mission_patch}
          alt={`${launch?.mission_name}-image`}
          display={loading ? "none" : "block"}
          onLoad={handleImageLoad}
          sx={styles.imagePatch}
        />

        <Box sx={styles.detailsWrapper}>
          <Tag sx={styles.tag}>{getStatusDetails(launch?.status).label}</Tag>
          <Text sx={styles.name}>{launch?.mission_name}</Text>
          <Text sx={styles.year}>{launch?.launch_year}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
