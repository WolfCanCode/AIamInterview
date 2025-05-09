import * as React from 'react';

const ManufacturingIcon = ({
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
      y="16"
      width="16"
      height="8"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <path d="M8 20L16 14L24 20" stroke="#06b6d4" strokeWidth="1.5" />
    <circle cx="12" cy="24" r="1.2" fill="#06b6d4" />
    <circle cx="20" cy="24" r="1.2" fill="#06b6d4" />
  </svg>
);

export default ManufacturingIcon;
