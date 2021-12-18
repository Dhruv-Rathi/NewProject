import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CrossIcon = ({fill = '#000', ...props}) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.106 1.94L6.042 5.004 9.04 8.002 8.003 9.039 5.005 6.042 1.94 9.105.97 8.133 4.033 5.07 1.019 2.055l1.037-1.037 3.015 3.014L8.134.968l.972.972z"
        fill={fill}
      />
    </Svg>
  );
};

export default CrossIcon;
