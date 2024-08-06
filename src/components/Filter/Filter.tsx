import React from "react";
import {
  CheckboxGroup,
  Checkbox,
  Box,
  IconButton,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { FilterIcon } from "../../ui";

interface FilterProps {
  years: number[];
  onYearChange: (values: string[]) => void;
  selectedYears: string[];
}

// Main logic handled in the main page LaunchesPage in order to keep the components clean
export const Filter: React.FC<FilterProps> = ({
  years,
  onYearChange,
  selectedYears,
}) => {
  const styles = useMultiStyleConfig("Filter");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (values: string[]) => {
    onYearChange(values);
  };

  return (
    <Box>
      <IconButton
        aria-label="Search database"
        icon={<FilterIcon />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent sx={styles.drawerContent}>
          <DrawerCloseButton sx={styles.drawerCloseButton} />
          <DrawerHeader sx={styles.drawerHeader}>Filters</DrawerHeader>
          <DrawerBody>
            <Text sx={styles.subHeading}>Launch year</Text>
            <CheckboxGroup onChange={handleChange} value={selectedYears}>
              <Box sx={styles.checkboxWrapper}>
                {years.map((year) => (
                  <Checkbox
                    key={year}
                    value={year.toString()}
                    mr={2}
                    color="white"
                    colorScheme="green"
                  >
                    {year}
                  </Checkbox>
                ))}
              </Box>
            </CheckboxGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
