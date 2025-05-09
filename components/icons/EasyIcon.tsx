import * as React from 'react';

const EasyIcon = ({
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
      d="M10 22C18 22 22 10 22 10"
      stroke="#22c55e"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M12 18C14 20 18 18 18 18"
      stroke="#22c55e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default EasyIcon;
