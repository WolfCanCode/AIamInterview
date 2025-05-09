import * as React from 'react';

const ArtsIcon = ({
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
    <ellipse
      cx="18"
      cy="16"
      rx="10"
      ry="7"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <circle cx="12" cy="16" r="1.2" fill="#06b6d4" />
    <circle cx="16" cy="13" r="1.2" fill="#06b6d4" />
    <circle cx="20" cy="16" r="1.2" fill="#06b6d4" />
    <circle cx="16" cy="19" r="1.2" fill="#06b6d4" />
  </svg>
);

export default ArtsIcon;
