import * as React from 'react';

const EditIcon = ({
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
    <rect x="4" y="17" width="16" height="3" rx="1.5" fill="#e0e7ef" />
    <rect x="14" y="5" width="2" height="8" rx="1" fill="#0ea5e9" />
    <rect x="8" y="11" width="8" height="2" rx="1" fill="#0ea5e9" />
    <rect x="6" y="13" width="12" height="2" rx="1" fill="#0ea5e9" />
  </svg>
);

export default EditIcon;
