import { ComponentStyleConfig } from "@chakra-ui/react";

const Filter: ComponentStyleConfig = {
  baseStyle: () => ({
    drawerContent: {
      backgroundColor: "#21242A",
    },
    drawerCloseButton: {
      color: "white",
    },
    drawerHeader: {
      color: "white",
    },
    subHeading: {
      color: "white",
      pb: 2,
    },
    checkboxWrapper: {
      flexDir: "column",
      display: "flex",
    },
  }),
};

export default Filter;
