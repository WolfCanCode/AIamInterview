import * as React from 'react';

const UserGraduateIcon = ({
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
    <path
      d="M16 4L28 10L16 16L4 10L16 4Z"
      fill="#a78bfa"
      stroke="#7c3aed"
      strokeWidth="2"
    />
    <ellipse cx="16" cy="21" rx="6" ry="4" fill="#a78bfa" />
    <circle cx="16" cy="14" r="4" fill="#7c3aed" />
    <rect x="15" y="7" width="2" height="6" fill="#7c3aed" />
  </svg>
);

export default UserGraduateIcon;
