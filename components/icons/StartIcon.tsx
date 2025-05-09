import * as React from 'react';

const StartIcon = ({
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
    <circle
      cx="16"
      cy="16"
      r="14"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="none"
    />
    <polygon
      points="13,11 23,16 13,21"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

export default StartIcon;
