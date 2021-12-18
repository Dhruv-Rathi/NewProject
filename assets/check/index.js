import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIcon = ({stroke = '#2CD6E2', ...props}) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.053 6.737l2.526 2.526L12 .842"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckIcon;
