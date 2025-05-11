import * as React from 'react';

const ProductDesignIcon = ({
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
    <rect x="8" y="12" width="16" height="12" rx="3" fill="#06b6d4" />
    <rect
      x="12"
      y="8"
      width="8"
      height="6"
      rx="2"
      fill="#101624"
      stroke="#06b6d4"
      strokeWidth="1.2"
    />
    <path
      d="M12 14l4 4 4-4"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="16" cy="22" r="2" fill="#a78bfa" />
  </svg>
);

export default ProductDesignIcon;
