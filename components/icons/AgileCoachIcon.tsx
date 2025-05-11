import * as React from 'react';

const AgileCoachIcon = ({
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
    <circle
      cx="16"
      cy="16"
      r="10"
      stroke="#06b6d4"
      strokeWidth="2"
      fill="#101624"
    />
    <rect x="13" y="13" width="6" height="6" rx="2" fill="#06b6d4" />
    <path d="M19 16l4-2v4l-4-2z" fill="#a78bfa" />
    <path
      d="M16 8v4"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 20v4"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default AgileCoachIcon;
