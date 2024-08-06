import React from "react";

interface StarIconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export const StarIconOutline: React.FC<StarIconProps> = (props) => (
  <svg
    width={props.width || "18"}
    height={props.height || "16"}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6875 5.125L15.5938 5.8125L17.4062 6.125L16.125 7.4375L13.375 10.2812L13.9375 14.2188L14.1875 16L12.5625 15.2188L9 13.4688L5.40625 15.2188L3.78125 16L4.0625 14.2188L4.625 10.2812L1.84375 7.4375L0.5625 6.125L2.375 5.8125L6.28125 5.125L8.125 1.625L9 0L9.84375 1.625L11.6875 5.125ZM14.3438 7.125L11.4375 6.625L10.7188 6.5L10.375 5.84375L9 3.21875L7.625 5.84375L7.28125 6.5L6.53125 6.625L3.625 7.125L5.6875 9.25L6.21875 9.75L6.09375 10.5L5.6875 13.4062L8.3125 12.125L9 11.7812L9.65625 12.125L12.3125 13.4062L11.875 10.5L11.7812 9.75L12.2812 9.25L14.3438 7.125Z"
      fill={props.fill || "#CCCCCC"}
    />
  </svg>
);
