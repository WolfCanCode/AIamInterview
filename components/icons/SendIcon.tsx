import * as React from 'react';

const SendIcon = ({
  width = 28,
  height = 28,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <polygon
      points="3,25 25,14 3,3 8,14 3,25"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
    />
    <line
      x1="8"
      y1="14"
      x2="25"
      y2="14"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default SendIcon;
