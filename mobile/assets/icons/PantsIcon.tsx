import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PantsIcon = ({ size = 24, color = '#000' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M8 2H16C16.55 2 17 2.45 17 3V5H18C18.55 5 19 5.45 19 6V20C19 20.55 18.55 21 18 21H14C13.45 21 13 20.55 13 20V14H11V20C11 20.55 10.55 21 10 21H6C5.45 21 5 20.55 5 20V6C5 5.45 5.45 5 6 5H7V3C7 2.45 7.45 2 8 2ZM9 10H15V4H9V10Z"
      fill={color}
    />
  </Svg>
);

export default PantsIcon;
