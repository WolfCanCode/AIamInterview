import * as React from 'react';

const MediumIcon = ({
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
    <polygon
      points="18,6 10,18 16,18 14,26 22,14 16,14"
      stroke="#38bdf8"
      strokeWidth="2.2"
      fill="none"
    />
  </svg>
);

export default MediumIcon;
