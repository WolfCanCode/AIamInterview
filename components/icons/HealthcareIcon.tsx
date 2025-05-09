import * as React from 'react';

const HealthcareIcon = ({
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
      d="M16 26C16 26 6 19 6 13.5C6 10.46 8.46 8 11.5 8C13.24 8 14.91 8.99 16 10.28C17.09 8.99 18.76 8 20.5 8C23.54 8 26 10.46 26 13.5C26 19 16 26 16 26Z"
      stroke="#06b6d4"
      strokeWidth="2.2"
      fill="none"
    />
    <path d="M16 13V17" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M14 15H18" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default HealthcareIcon;
