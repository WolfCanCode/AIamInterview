import * as React from 'react';

const FacebookIcon = ({
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
    <path
      d="M18 4h-3a4 4 0 0 0-4 4v3H8v4h3v9h4v-9h3l1-4h-4V8a1 1 0 0 1 1-1h3V4z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

export default FacebookIcon;
