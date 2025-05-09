import * as React from 'react';

const IotIcon = ({
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
    <circle cx="16" cy="16" r="10" stroke="#06b6d4" strokeWidth="2.2" />
    <circle cx="16" cy="8" r="1.5" fill="#06b6d4" />
    <circle cx="24" cy="16" r="1.5" fill="#06b6d4" />
    <circle cx="16" cy="24" r="1.5" fill="#06b6d4" />
    <circle cx="8" cy="16" r="1.5" fill="#06b6d4" />
    <path d="M16 8V24" stroke="#06b6d4" strokeWidth="1.2" />
    <path d="M8 16H24" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default IotIcon;
