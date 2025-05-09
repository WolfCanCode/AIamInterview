import * as React from 'react';

const InvestmentIcon = ({
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
      y="20"
      width="16"
      height="4"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <path d="M10 20L16 14L20 18L24 12" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M24 12V16" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default InvestmentIcon;
