import * as React from 'react';

const SecurityIcon = ({
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
    <path
      d="M16 5L26 9V16C26 22 16 27 16 27C16 27 6 22 6 16V9L16 5Z"
      stroke="#06b6d4"
      strokeWidth="2.2"
      fill="none"
    />
    <path
      d="M16 13V19"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="16" cy="11" r="1.5" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default SecurityIcon;
