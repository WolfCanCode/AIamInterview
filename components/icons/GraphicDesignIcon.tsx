import * as React from 'react';

const GraphicDesignIcon = ({
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
    <ellipse cx="16" cy="18" rx="10" ry="7" fill="#06b6d4" />
    <circle cx="11" cy="18" r="2" fill="#a78bfa" />
    <circle cx="16" cy="22" r="1.5" fill="#fff" />
    <circle cx="21" cy="18" r="2" fill="#0e7490" />
    <rect
      x="14"
      y="8"
      width="4"
      height="8"
      rx="2"
      fill="#101624"
      stroke="#06b6d4"
      strokeWidth="1.2"
    />
  </svg>
);

export default GraphicDesignIcon;
