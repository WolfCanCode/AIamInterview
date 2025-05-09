import * as React from 'react';

const AgricultureIcon = ({
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
    <path d="M16 26V16" stroke="#06b6d4" strokeWidth="2.2" />
    <ellipse cx="16" cy="12" rx="6" ry="3" stroke="#06b6d4" strokeWidth="2.2" />
    <path d="M16 16C16 16 10 18 10 22" stroke="#06b6d4" strokeWidth="1.5" />
    <path d="M16 16C16 16 22 18 22 22" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default AgricultureIcon;
