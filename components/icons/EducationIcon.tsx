import * as React from 'react';

const EducationIcon = ({
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
      d="M6 14L16 9L26 14L16 19L6 14Z"
      stroke="#06b6d4"
      strokeWidth="2.2"
      fill="none"
    />
    <path d="M16 19V24" stroke="#06b6d4" strokeWidth="1.5" />
    <circle cx="16" cy="24" r="1.5" fill="#06b6d4" />
  </svg>
);

export default EducationIcon;
