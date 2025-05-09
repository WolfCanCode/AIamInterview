import * as React from 'react';

const BlockchainIcon = ({
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
      y="14"
      width="8"
      height="8"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="18"
      y="10"
      width="8"
      height="8"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="14"
      y="20"
      width="8"
      height="8"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <path d="M14 18L18 14" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M18 18L22 22" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default BlockchainIcon;
