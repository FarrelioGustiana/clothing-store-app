import React from 'react';
import Svg, { Path } from 'react-native-svg';

const JacketIcon = ({ size = 24, color = '#000' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M12 2C11.55 2 11 2.45 11 3V4C9.34 4 8 5.34 8 7V20C8 20.55 8.45 21 9 21H10C10.55 21 11 20.55 11 20V18H13V20C13 20.55 13.45 21 14 21H15C15.55 21 16 20.55 16 20V7C16 5.34 14.66 4 13 4V3C13 2.45 12.45 2 12 2ZM10 7H9C8.45 7 8 7.45 8 8V9C8 9.55 8.45 10 9 10H10V7ZM15 7H14V10H15C15.55 10 16 9.55 16 9V8C16 7.45 15.55 7 15 7ZM10 12H9C8.45 12 8 12.45 8 13V14C8 14.55 8.45 15 9 15H10V12ZM15 12H14V15H15C15.55 15 16 14.55 16 14V13C16 12.45 15.55 12 15 12Z"
      fill={color}
    />
  </Svg>
);

export default JacketIcon;
