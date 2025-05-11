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
      height="16"
      rx="4"
      fill="#101624"
      stroke="#06b6d4"
      strokeWidth="2"
    />
    <rect x="10" y="12" width="12" height="8" rx="2" fill="#06b6d4" />
    <rect x="12" y="16" width="8" height="2" rx="1" fill="#a78bfa" />
    <circle cx="16" cy="20" r="2" fill="#fff" />
  </svg>
);

export default FrontendIcon;
