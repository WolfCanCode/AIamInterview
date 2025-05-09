import * as React from 'react';

const RobotIcon = ({
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
      height="14"
      rx="4"
      fill="#67e8f9"
      stroke="#0ea5e9"
      strokeWidth="2"
    />
    <rect x="12" y="24" width="8" height="4" rx="2" fill="#0ea5e9" />
    <circle cx="12" cy="17" r="2" fill="#0f172a" />
    <circle cx="20" cy="17" r="2" fill="#0f172a" />
    <rect x="14.5" y="6" width="3" height="6" rx="1.5" fill="#0ea5e9" />
    <rect x="2" y="16" width="4" height="2" rx="1" fill="#0ea5e9" />
    <rect x="26" y="16" width="4" height="2" rx="1" fill="#0ea5e9" />
  </svg>
);

export default RobotIcon;
