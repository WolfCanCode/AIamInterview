import * as React from 'react';

const EngineeringIcon = ({
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
    <circle cx="16" cy="16" r="7" stroke="#06b6d4" strokeWidth="2.2" />
    <path
      d="M16 9V7M16 25V23M23 16H25M7 16H9M20.12 20.12L21.54 21.54M10.46 10.46L11.88 11.88M20.12 11.88L21.54 10.46M10.46 21.54L11.88 20.12"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="16" cy="16" r="2" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default EngineeringIcon;
