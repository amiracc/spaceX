import React from "react";
import {
  Box,
  IconButton,
  useMultiStyleConfig,
  Drawer,
  Text,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { SanitizedLaunch } from "../../interfaces";
import { StarIcon } from "../../ui";
import { LaunchCard } from "..";

interface FavoritesProps {
  favoriteLaunches: SanitizedLaunch[];
}

export const Favorites: React.FC<FavoritesProps> = ({ favoriteLaunches }) => {
  const styles = useMultiStyleConfig("Favorites");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        aria-label="Search database"
        icon={<StarIcon fill="black" />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent sx={styles.drawerContent}>
          <DrawerCloseButton sx={styles.whiteText} />
          <DrawerHeader sx={styles.whiteText}>Favorite Launches</DrawerHeader>
          <DrawerBody sx={styles.drawerScrollBar}>
            {favoriteLaunches && favoriteLaunches.length > 0 ? (
              <Box sx={styles.favoritesWrapper}>
                {favoriteLaunches.map((favoriteLaunch: SanitizedLaunch) => (
                  <LaunchCard hasFavorite={false} launch={favoriteLaunch} />
                ))}
              </Box>
            ) : (
              <Text sx={styles.whiteText}>No favorite launches added.</Text>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
