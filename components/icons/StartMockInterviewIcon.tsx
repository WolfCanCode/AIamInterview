import * as React from 'react';

const StartMockInterviewIcon = ({
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
    <polygon
      points="16,7 29,13 16,19 3,13 16,7"
      stroke="currentColor"
      strokeWidth="2.2"
      fill="none"
      strokeLinejoin="round"
    />
    <path
      d="M16 19v6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <rect
      x="12"
      y="25"
      width="8"
      height="3"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export default StartMockInterviewIcon;
