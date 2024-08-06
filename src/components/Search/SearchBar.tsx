import React from "react";
import { Input, useMultiStyleConfig } from "@chakra-ui/react";

interface SearchBarProps {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialValue: string;
}

// Main logic handled in the main page LaunchesPage in order to keep the components clean
export const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,
  initialValue,
}) => {
  const styles = useMultiStyleConfig("SearchBar");

  return (
    <Input
      placeholder="Search"
      value={initialValue}
      sx={styles.input}
      onChange={onSearchChange}
      focusBorderColor="white"
    />
  );
};
