import * as React from 'react';

const EngineeringManagerIcon = ({
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
    <circle cx="16" cy="16" r="4" fill="#06b6d4" />
    <rect
      x="13"
      y="22"
      width="6"
      height="3"
      rx="1.5"
      fill="#23272e"
      stroke="#06b6d4"
      strokeWidth="1.2"
    />
    <path
      d="M16 6v2M16 24v2M6 16h2M24 16h2M9.5 9.5l1.5 1.5M21 21l1.5 1.5M21 11l1.5-1.5M9.5 22.5l1.5-1.5"
      stroke="#06b6d4"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default EngineeringManagerIcon;
