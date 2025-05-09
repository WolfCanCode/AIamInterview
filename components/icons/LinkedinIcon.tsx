import * as React from 'react';

const LinkedinIcon = ({
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
    <rect
      x="3"
      y="3"
      width="22"
      height="22"
      rx="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M8 12v6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="8"
      cy="9"
      r="1"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M13 12v6m0-3.5c0-1.5 2-1.5 2 0V18m2-3.5c0-1.5 2-1.5 2 0V18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default LinkedinIcon;
