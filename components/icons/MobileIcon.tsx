import * as React from 'react';

const MobileIcon = ({
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
      x="10"
      y="6"
      width="12"
      height="20"
      rx="3"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <circle cx="16" cy="24" r="1.2" fill="#06b6d4" />
  </svg>
);

export default MobileIcon;
