import { ComponentStyleConfig } from "@chakra-ui/react";

const LaunchCard: ComponentStyleConfig = {
  parts: [
    "container",
    "flexWrapper",
    "favouriteIconWrapper",
    "imagePatch",
    "detailsWrapper",
    "tag",
    "name",
    "year",
  ],
  baseStyle: ({ isMobile, tagColor }) => ({
    container: {
      backgroundColor: "#21242A",
      border: "1px solid #333333",
      width: "100%",
      borderRadius: "md",
      display: "flex",
      alignItems: "center",
      justifyContent: { base: "center", lg: "flex-start" },
      p: 6,
      shadow: "md",
      color: "white",
      position: "relative",
    },
    flexWrapper: {
      flexDir: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
    favouriteIconWrapper: {
      position: "absolute",
      border: "1px solid #333333",
      right: 6,
      top: 6,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      borderRadius: "md",
      p: 2,
    },
    imagePatch: {
      width: isMobile ? "50%" : "100px",
      height: "auto",
    },
    detailsWrapper: {
      ml: isMobile ? 0 : 4,
      mt: isMobile ? 2 : 0,
      alignItems: { base: "center", lg: "flex-start" },
      flexDirection: { base: "column" },
      display: "flex",
    },
    tag: {
      fontSize: "xs",
      fontWeight: "mediumd",
      mb: 3,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      color: tagColor,
      border: `1px solid ${tagColor}`,
      borderRadius: 4,
      pl: 2,
      pr: 2,
      pt: 1,
      pb: 1,
    },
    name: {
      fontSize: "lg",
      fontWeight: "semibold",
    },
    year: {
      fontSize: "md",
      color: "gray.500",
    },
  }),
};

export default LaunchCard;
