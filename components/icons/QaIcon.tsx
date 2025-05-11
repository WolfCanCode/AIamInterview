import * as React from 'react';

const QaIcon = ({
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
    <path
      d="M14 16l2 2 4-4"
      stroke="#a78bfa"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="20" r="2" fill="#fff" />
  </svg>
);

export default QaIcon;
