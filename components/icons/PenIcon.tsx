import * as React from 'react';

const PenIcon = ({
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
    <rect x="6" y="22" width="20" height="4" rx="2" fill="#f472b6" />
    <rect
      x="14"
      y="6"
      width="4"
      height="14"
      rx="2"
      fill="#f472b6"
      stroke="#be185d"
      strokeWidth="2"
    />
    <polygon points="16,4 18,6 14,6" fill="#be185d" />
  </svg>
);

export default PenIcon;
