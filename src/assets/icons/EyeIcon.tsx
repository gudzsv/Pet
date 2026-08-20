import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
type EyeIconProps = {
  color?: string;
};

const EyeIcon = ({ color }: EyeIconProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke={color || 'currentColor'}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></Path>
    <Circle cx="12" cy="12" r="3"></Circle>
  </Svg>
);

export default EyeIcon;
