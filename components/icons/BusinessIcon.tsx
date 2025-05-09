import * as React from 'react';

const BusinessIcon = ({
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
      height="10"
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
    <path d="M12 18V22" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M16 16V22" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M20 20V22" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default BusinessIcon;
