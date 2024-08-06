import React from "react";

interface StarIconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const StarIcon: React.FC<StarIconProps> = (props) => (
  <svg
    width={props.width || "18"}
    height={props.height || "16"}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 0L11.6875 5.125L17.4062 6.125L13.375 10.2812L14.1875 16L9 13.4688L3.78125 16L4.625 10.2812L0.5625 6.125L6.28125 5.125L9 0Z"
      fill={props.fill || "#EAE34A"}
    />
  </svg>
);
