import * as React from 'react';

const CloudIcon = ({
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
      d="M10 22C7.79 22 6 20.21 6 18C6 15.79 7.79 14 10 14C10.29 14 10.57 14.03 10.84 14.08C11.94 11.67 14.28 10 17 10C20.31 10 23 12.69 23 16C23 16.13 22.99 16.26 22.98 16.39C24.16 16.7 25 17.74 25 19C25 20.66 23.66 22 22 22H10Z"
      stroke="#06b6d4"
      strokeWidth="2.2"
      fill="none"
    />
  </svg>
);

export default CloudIcon;
