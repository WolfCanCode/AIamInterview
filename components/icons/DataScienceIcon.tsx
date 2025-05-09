import * as React from 'react';

const DataScienceIcon = ({
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
      x="6"
      y="20"
      width="4"
      height="6"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="14"
      y="14"
      width="4"
      height="12"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="22"
      y="10"
      width="4"
      height="16"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <path d="M6 26H26" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default DataScienceIcon;
