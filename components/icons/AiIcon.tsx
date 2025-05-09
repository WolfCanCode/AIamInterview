import * as React from 'react';

const AiIcon = ({
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
    <ellipse
      cx="16"
      cy="16"
      rx="8"
      ry="10"
      stroke="#06b6d4"
      strokeWidth="2.2"
    />
    <circle cx="16" cy="12" r="1.2" fill="#06b6d4" />
    <circle cx="12" cy="16" r="1.2" fill="#06b6d4" />
    <circle cx="20" cy="16" r="1.2" fill="#06b6d4" />
    <circle cx="16" cy="20" r="1.2" fill="#06b6d4" />
    <path d="M16 12V20" stroke="#06b6d4" strokeWidth="1.2" />
    <path d="M12 16H20" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default AiIcon;
