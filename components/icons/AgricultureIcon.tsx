import * as React from 'react';

const AgricultureIcon = ({
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
      x="8"
      y="10"
      width="16"
      height="12"
      rx="4"
      fill="#101624"
      stroke="#06b6d4"
      strokeWidth="2"
    />
    <ellipse cx="16" cy="18" rx="4" ry="2" fill="#a78bfa" />
    <path
      d="M16 14c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3z"
      fill="#06b6d4"
    />
    <path d="M16 16v4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    <rect x="15" y="12" width="2" height="2" rx="1" fill="#fff" />
  </svg>
);

export default AgricultureIcon;
