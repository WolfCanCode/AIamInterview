import * as React from 'react';

const BackendIcon = ({
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
      y="8"
      width="20"
      height="16"
      rx="3"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="10"
      y="12"
      width="12"
      height="2"
      rx="1"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <rect
      x="10"
      y="16"
      width="12"
      height="2"
      rx="1"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <circle cx="10.5" cy="22.5" r="1" fill="#06b6d4" />
    <circle cx="16" cy="22.5" r="1" fill="#06b6d4" />
    <circle cx="21.5" cy="22.5" r="1" fill="#06b6d4" />
  </svg>
);

export default BackendIcon;
