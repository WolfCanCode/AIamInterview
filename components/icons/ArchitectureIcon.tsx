import * as React from 'react';

const ArchitectureIcon = ({
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
      y="12"
      width="16"
      height="12"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="12"
      y="16"
      width="4"
      height="8"
      rx="1"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <rect
      x="20"
      y="16"
      width="2"
      height="4"
      rx="1"
      stroke="#06b6d4"
      strokeWidth="1.2"
    />
    <path d="M8 20H24" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default ArchitectureIcon;
