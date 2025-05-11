import * as React from 'react';

const ProjectManagerIcon = ({
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
      x="7"
      y="9"
      width="18"
      height="14"
      rx="3"
      stroke="#06b6d4"
      strokeWidth="2"
      fill="#101624"
    />
    <rect
      x="10"
      y="5"
      width="12"
      height="6"
      rx="2"
      fill="#23272e"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <path
      d="M11 15h4M11 19h7"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="22" cy="19" r="2" fill="#06b6d4" />
    <path
      d="M21.5 19.5l1 1 1.5-1.5"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default ProjectManagerIcon;
