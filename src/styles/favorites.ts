import { ComponentStyleConfig } from "@chakra-ui/react";

const Favorites: ComponentStyleConfig = {
  baseStyle: () => ({
    drawerContent: {
      backgroundColor: "#21242A",
    },
    whiteText: {
      color: "white",
    },
    drawerScrollBar: {
      "&::-webkit-scrollbar": {
        width: "0px",
        height: "0px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "transparent",
      },
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
    },
    favoritesWrapper: {
      flexDir: "column",
      display: "flex",
      gap: 4,
    },
  }),
};

export default Favorites;
