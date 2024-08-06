import { ComponentStyleConfig } from "@chakra-ui/react";

const LaunchList: ComponentStyleConfig = {
  parts: ["container", "wrapper"],
  baseStyle: () => ({
    container: {
      flex: 1,
      p: 4,
      color: "white",
      width: "100%",
      overflowY: "auto",
      height: { base: "85vh", lg: "100vh" },
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      "&::-webkit-scrollbar": {
        width: "0px",
        height: "0px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "transparent",
      },
      scrollbarWidth: "none",
    },
    wrapper: {
      flex: 1,
      display: "flex",
      gap: 8,
      flexDirection: "column",
      justifyContent: "flex-start",
      mt: { base: "10vh", lg: 0 },
    },
  }),
};

export default LaunchList;
