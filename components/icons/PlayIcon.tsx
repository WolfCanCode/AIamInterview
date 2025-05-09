import * as React from 'react';

const PlayIcon = ({
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
      fill="#67e8f9"
      stroke="#0ea5e9"
      strokeWidth="2"
    />
    <polygon points="10,8 18,12 10,16" fill="#0ea5e9" />
  </svg>
);

export default PlayIcon;
