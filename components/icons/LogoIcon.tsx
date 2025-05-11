import * as React from 'react';

const LogoIcon = ({
  width = 40,
  height = 40,
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    width={width}
    height={height}
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="4" y="8" width="24" height="14" rx="3" fill="#22d3ee" />
    <rect x="7" y="11" width="18" height="8" rx="2" fill="#0e7490" />
    <rect x="2" y="24" width="28" height="3" rx="1.5" fill="#22d3ee" />
    <circle cx="16" cy="15" r="2" fill="#22d3ee" />
  </svg>
);

export default LogoIcon;
