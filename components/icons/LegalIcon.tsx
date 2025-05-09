import * as React from 'react';

const LegalIcon = ({
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
    <path d="M16 8V24" stroke="#06b6d4" strokeWidth="2.2" />
    <path d="M10 12H22" stroke="#06b6d4" strokeWidth="2.2" />
    <path
      d="M12 12C12 14 10 16 10 16C10 16 8 14 8 12"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <path
      d="M24 12C24 14 22 16 22 16C22 16 20 14 20 12"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <circle cx="16" cy="24" r="2" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default LegalIcon;
