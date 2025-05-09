import * as React from 'react';

const EmbeddedIcon = ({
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
      x="10"
      y="10"
      width="12"
      height="12"
      rx="3"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="14"
      y="14"
      width="4"
      height="4"
      rx="1"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <path d="M16 6V10" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M16 22V26" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M6 16H10" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M22 16H26" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default EmbeddedIcon;
