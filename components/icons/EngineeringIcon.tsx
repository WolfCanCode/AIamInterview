import * as React from 'react';

const EngineeringIcon = ({
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
    <circle cx="16" cy="16" r="3" fill="#a78bfa" />
    <rect x="14" y="12" width="4" height="2" rx="1" fill="#06b6d4" />
    <path
      d="M13 18l2-2 2 2"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M16 13v-2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M16 19v2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default EngineeringIcon;
