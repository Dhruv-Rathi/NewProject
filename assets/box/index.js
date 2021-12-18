import * as React from 'react';
import Svg, {
  Path,
  Rect,
  Mask,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from 'react-native-svg';

const BoxIcon = ({props}) => {
  return (
    <Svg
      width={17}
      height={19}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.188 12.81V6.06a1.687 1.687 0 00-.844-1.459L9.438 1.226a1.687 1.687 0 00-1.688 0L1.844 4.601A1.688 1.688 0 001 6.061v6.75a1.687 1.687 0 00.844 1.46l5.906 3.374a1.688 1.688 0 001.688 0l5.906-3.374a1.689 1.689 0 00.844-1.46z"
        stroke="#2CD6E2"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.228 5.184l7.366 4.26 7.366-4.26M8.594 17.94V9.437"
        stroke="#2CD6E2"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default BoxIcon;
