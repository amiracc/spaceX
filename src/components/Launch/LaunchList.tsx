import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import { SanitizedLaunch } from "../../interfaces";
import { LaunchCard } from "./LaunchCard";

export interface LaunchListProps {
  launches: SanitizedLaunch[] | undefined;
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
}

export const LaunchList = ({
  launches,
  favorites,
  onToggleFavorite,
}: LaunchListProps) => {
  const styles = useMultiStyleConfig("LaunchList");

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        {launches?.map((launch: SanitizedLaunch) => (
          <LaunchCard
            launch={launch}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </Box>
    </Box>
  );
};
