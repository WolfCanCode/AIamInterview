import * as React from 'react';

const ScrumMasterIcon = ({
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
      rx="3"
      stroke="#06b6d4"
      strokeWidth="2"
      fill="#101624"
    />
    <rect x="9" y="11" width="4" height="4" rx="1" fill="#06b6d4" />
    <rect x="15" y="11" width="4" height="4" rx="1" fill="#a78bfa" />
    <rect x="21" y="11" width="2" height="4" rx="1" fill="#06b6d4" />
    <rect
      x="9"
      y="17"
      width="6"
      height="3"
      rx="1"
      fill="#23272e"
      stroke="#06b6d4"
      strokeWidth="1.2"
    />
    <rect
      x="17"
      y="17"
      width="6"
      height="3"
      rx="1"
      fill="#23272e"
      stroke="#a78bfa"
      strokeWidth="1.2"
    />
  </svg>
);

export default ScrumMasterIcon;
