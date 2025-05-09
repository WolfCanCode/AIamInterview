import * as React from 'react';

const PsychologyIcon = ({
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
    <path
      d="M12 16C12 14 14 12 16 12C18 12 20 14 20 16C20 18 18 20 16 20C14 20 12 18 12 16Z"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    <path d="M16 6V26" stroke="#06b6d4" strokeWidth="1.2" />
  </svg>
);

export default PsychologyIcon;
