import * as React from 'react';

const BusinessIcon = ({
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
      y="10"
      width="20"
      height="12"
      rx="4"
      fill="#101624"
      stroke="#06b6d4"
      strokeWidth="2"
    />
    <rect x="10" y="14" width="2" height="4" rx="1" fill="#a78bfa" />
    <rect x="14" y="12" width="2" height="6" rx="1" fill="#06b6d4" />
    <rect x="18" y="16" width="2" height="2" rx="1" fill="#fff" />
    <rect x="12" y="8" width="8" height="4" rx="2" fill="#06b6d4" />
  </svg>
);

export default BusinessIcon;
