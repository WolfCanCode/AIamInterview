import * as React from 'react';

const QaIcon = ({
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
    <circle cx="15" cy="15" r="7" stroke="#06b6d4" strokeWidth="2.2" />
    <path
      d="M20 20L25 25"
      stroke="#06b6d4"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M12.5 15L14.5 17L18 13.5"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default QaIcon;
