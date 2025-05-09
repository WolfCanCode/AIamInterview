import * as React from 'react';

const DesignIcon = ({
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
      y="20"
      width="16"
      height="3"
      rx="1.5"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <path d="M10 22L22 10" stroke="#06b6d4" strokeWidth="1.5" />
    <rect
      x="14"
      y="8"
      width="4"
      height="8"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
  </svg>
);

export default DesignIcon;
