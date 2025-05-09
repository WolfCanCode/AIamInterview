import * as React from 'react';

const DevopsIcon = ({
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
      d="M10 16C10 13.79 11.79 12 14 12C15.38 12 16.59 12.81 17.17 14H18.83C19.41 12.81 20.62 12 22 12C24.21 12 26 13.79 26 16C26 18.21 24.21 20 22 20C20.62 20 19.41 19.19 18.83 18H17.17C16.59 19.19 15.38 20 14 20C11.79 20 10 18.21 10 16Z"
      stroke="#06b6d4"
      strokeWidth="2.2"
      fill="none"
    />
    <circle cx="14" cy="16" r="2" stroke="#06b6d4" strokeWidth="1.5" />
    <circle cx="22" cy="16" r="2" stroke="#06b6d4" strokeWidth="1.5" />
  </svg>
);

export default DevopsIcon;
