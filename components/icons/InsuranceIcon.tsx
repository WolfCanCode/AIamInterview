import * as React from 'react';

const InsuranceIcon = ({
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
    <rect x="14" y="14" width="4" height="4" rx="1" fill="#a78bfa" />
    <path d="M12 16c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" fill="#06b6d4" />
    <rect x="14" y="12" width="4" height="2" rx="1" fill="#fff" />
    <rect x="12" y="18" width="8" height="2" rx="1" fill="#fff" />
  </svg>
);

export default InsuranceIcon;
