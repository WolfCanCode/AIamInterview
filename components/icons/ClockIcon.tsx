import * as React from 'react';

const ClockIcon = ({
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
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#38bdf8"
      strokeWidth="2"
      fill="#e0f2fe"
    />
    <path
      d="M12 7v5l3 3"
      stroke="#0ea5e9"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default ClockIcon;
