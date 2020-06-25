import React, { SVGProps } from 'react';

const Normal: React.FC = ({ width, height, fill }: SVGProps<SVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 25"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5ZM19.6428 12.5C19.6428 16.4449 16.4449 19.6428 12.5 19.6428C8.55511 19.6428 5.35717 16.4449 5.35717 12.5C5.35717 8.55511 8.55511 5.35717 12.5 5.35717C16.4449 5.35717 19.6428 8.55511 19.6428 12.5Z"
    />
  </svg>
);

export default Normal;
