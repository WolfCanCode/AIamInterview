import * as React from 'react';

const FrontendIcon = ({
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
      height="14"
      rx="3"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="10"
      y="20"
      width="12"
      height="2"
      rx="1"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <path
      d="M13 14L11 16L13 18"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 14L21 16L19 18"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FrontendIcon;
