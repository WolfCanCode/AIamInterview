import * as React from 'react';

const ManagementIcon = ({
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
    <circle cx="16" cy="10" r="4" fill="#06b6d4" />
    <ellipse cx="16" cy="22" rx="10" ry="6" fill="#a78bfa" />
    <circle cx="7" cy="20" r="3" fill="#7c3aed" />
    <circle cx="25" cy="20" r="3" fill="#7c3aed" />
    <rect x="13" y="14" width="6" height="4" rx="2" fill="#06b6d4" />
  </svg>
);

export default ManagementIcon;
