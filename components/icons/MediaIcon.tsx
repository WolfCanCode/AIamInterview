import * as React from 'react';

const MediaIcon = ({
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
    <polygon
      points="14,12 22,16 14,20"
      stroke="#06b6d4"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M8 16C8 12 12 8 16 8" stroke="#06b6d4" strokeWidth="1.2" />
    <path d="M8 16C8 20 12 24 16 24" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default MediaIcon;
