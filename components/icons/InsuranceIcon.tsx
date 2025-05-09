import * as React from 'react';

const InsuranceIcon = ({
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
      rx="6"
      stroke="#06b6d4"
      strokeWidth="2.2"
      fill="none"
    />
    <path
      d="M16 18c2.5 0 4.5-2 4.5-4.5S18.5 9 16 9s-4.5 2-4.5 4.5S13.5 18 16 18z"
      stroke="#06b6d4"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M12 22c0-2.2 2.7-3.5 4-3.5s4 1.3 4 3.5"
      stroke="#06b6d4"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export default InsuranceIcon;
