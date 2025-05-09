import * as React from 'react';

const BankingIcon = ({
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
      x="8"
      y="14"
      width="16"
      height="8"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <rect
      x="12"
      y="10"
      width="8"
      height="4"
      rx="1.5"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <path d="M10 18H22" stroke="#06b6d4" strokeWidth="1.2" />
    <circle cx="12" cy="20" r="1.2" fill="#06b6d4" />
  </svg>
);

export default BankingIcon;
