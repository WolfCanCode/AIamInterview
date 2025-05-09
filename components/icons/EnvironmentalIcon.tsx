import * as React from 'react';

const EnvironmentalIcon = ({
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
    <ellipse cx="16" cy="20" rx="8" ry="6" stroke="#06b6d4" strokeWidth="2.2" />
    <path
      d="M16 26C16 18 24 14 24 14C24 14 20 10 16 10C12 10 8 14 8 14C8 14 16 18 16 26Z"
      stroke="#06b6d4"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export default EnvironmentalIcon;
