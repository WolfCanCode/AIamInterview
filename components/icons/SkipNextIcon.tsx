import * as React from 'react';

const SkipNextIcon = ({
  width = 24,
  height = 24,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <polygon points="6,4 14,12 6,20" fill="#0ea5e9" />
    <rect x="16" y="4" width="2" height="16" rx="1" fill="#0ea5e9" />
  </svg>
);

export default SkipNextIcon;
