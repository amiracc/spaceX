import { ComponentStyleConfig } from "@chakra-ui/react";

const LaunchPage: ComponentStyleConfig = {
  parts: [
    "container",
    "logo",
    "background",
    "infoContainer",
    "infoWrapper",
    "spinner",
    "error",
    "center",
  ],
  baseStyle: () => ({
    container: {
      display: "flex",
      height: "100vh",
      backgroundColor: "#000",
      flexDir: { base: "column", lg: "row" },
      pl: { base: 0, lg: 16 },
      pr: { base: 0, lg: 16 },
      position: "relative",
    },
    logo: {
      position: "absolute",
      top: { base: 4, lg: 0 },
      left: { base: 10, lg: 16 },
      zIndex: 3,
    },
    background: {
      flex: "1",
      opacity: 0.7,
      backgroundImage: `url(https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: { base: "80vh", lg: "100vh" },
      zIndex: { base: 1, lg: 0 },
    },
    infoContainer: {
      flex: "1",
      display: "flex",
      flexDir: "column",
      position: { base: "absolute", lg: "static" },
      top: { base: "0", lg: "auto" },
      left: { base: "0", lg: "auto" },
      width: { base: "100%", lg: "auto" },
      height: { base: "100%", lg: "auto" },
      backgroundColor: { base: "rgba(0, 0, 0, 0.5)", lg: "transparent" },
      zIndex: { base: "2", lg: "auto" },
      overflowY: { base: "auto", lg: "visible" },
      p: { base: 4, lg: 0 },
    },
    infoWrapper: {
      display: "flex",
      flexDir: "row",
      justifyContent: "flex-end",
      gap: 6,
      pr: 4,
      pt: 8,
    },
    spinner: {
      position: "absolute",
    },
    error: {
      color: "white",
      position: "absolute",
      alignSelf: "center",
      top: 0,
      bottom: 0,
    },
    center: {
      height: "100%",
    },
  }),
};

export default LaunchPage;
