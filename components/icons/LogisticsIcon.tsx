import * as React from 'react';

const LogisticsIcon = ({
  width = 32,
  height = 32,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect
      x="8"
      y="14"
      width="12"
      height="8"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="20"
      y="18"
      width="4"
      height="4"
      rx="1"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="24" r="1.2" fill="#06b6d4" />
    <circle cx="22" cy="24" r="1.2" fill="#06b6d4" />
  </svg>
);

export default LogisticsIcon;
