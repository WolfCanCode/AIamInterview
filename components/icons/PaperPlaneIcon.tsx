import * as React from 'react';

const PaperPlaneIcon = ({
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
      points="4,28 28,16 4,4 10,16 4,28"
      fill="#67e8f9"
      stroke="#0ea5e9"
      strokeWidth="2"
    />
    <line x1="10" y1="16" x2="28" y2="16" stroke="#0ea5e9" strokeWidth="2" />
  </svg>
);

export default PaperPlaneIcon;
