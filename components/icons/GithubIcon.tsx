import * as React from 'react';

const GithubIcon = ({
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
    <circle
      cx="14"
      cy="14"
      r="12"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M10 21v-2.2c0-.7.2-1.1.7-1.5-2.3-.3-4.7-1.1-4.7-5A3.7 3.7 0 0 1 7.1 9.2c-.1-.3-.3-1.2.1-2.4 0 0 .9-.3 2.6 1a8.7 8.7 0 0 1 4.2 0c1.7-1.3 2.6-1 2.6-1 .4 1.2.2 2.1.1 2.4a3.7 3.7 0 0 1 1 2.6c0 3.9-2.4 4.7-4.7 5 .3.2.7.8.7 1.5V21"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GithubIcon;
