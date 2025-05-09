import * as React from 'react';

const HardIcon = ({
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
    <path
      d="M16 6L26 10V18C26 24 16 28 16 28C16 28 6 24 6 18V10L16 6Z"
      stroke="#f472b6"
      strokeWidth="2.2"
      fill="none"
    />
    <circle cx="16" cy="18" r="2" stroke="#f472b6" strokeWidth="1.5" />
  </svg>
);

export default HardIcon;
