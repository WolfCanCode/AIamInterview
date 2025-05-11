import * as React from 'react';

const ProductOwnerIcon = ({
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
    <rect
      x="8"
      y="8"
      width="16"
      height="18"
      rx="3"
      stroke="#06b6d4"
      strokeWidth="2"
      fill="#101624"
    />
    <rect
      x="12"
      y="4"
      width="8"
      height="6"
      rx="2"
      stroke="#06b6d4"
      strokeWidth="1.5"
      fill="#23272e"
    />
    <path
      d="M12 14h8M12 18h5"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="22" cy="22" r="2" fill="#06b6d4" />
    <path
      d="M21 22l1 1 2-2"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default ProductOwnerIcon;
