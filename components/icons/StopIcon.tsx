import * as React from 'react';

const StopIcon = ({
  width = 28,
  height = 28,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect
      x="5"
      y="5"
      width="18"
      height="18"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="none"
    />
  </svg>
);

export default StopIcon;
