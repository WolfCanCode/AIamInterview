import * as React from 'react';

const ScienceIcon = ({
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
    <ellipse cx="16" cy="20" rx="7" ry="3" stroke="#06b6d4" strokeWidth="2.2" />
    <path d="M16 8V20" stroke="#06b6d4" strokeWidth="2.2" />
    <path d="M12 8L20 8" stroke="#06b6d4" strokeWidth="2.2" />
    <circle cx="16" cy="8" r="2" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default ScienceIcon;
