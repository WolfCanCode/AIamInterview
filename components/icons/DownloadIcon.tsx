import * as React from 'react';

const DownloadIcon = ({
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
    <rect x="4" y="18" width="16" height="2" rx="1" fill="#fff" />
    <path d="M12 4v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M8 12l4 4 4-4"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DownloadIcon;
