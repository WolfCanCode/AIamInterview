import * as React from 'react';

const GameIcon = ({
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
      rx="4"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <circle cx="12" cy="20" r="1.2" fill="#06b6d4" />
    <circle cx="20" cy="20" r="1.2" fill="#06b6d4" />
    <path d="M16 18V22" stroke="#06b6d4" strokeWidth="1.2" />
    <path d="M14 20H18" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default GameIcon;
