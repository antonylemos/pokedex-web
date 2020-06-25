import React, { SVGProps } from 'react';

const Grass: React.FC = ({ width, height, fill }: SVGProps<SVGElement>) => (
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
      d="M4.64923 21.8085C4.56014 21.7247 4.47204 21.6392 4.38495 21.5522C-0.21214 16.9551 -0.212139 9.50172 4.38495 4.90465C8.98203 0.307541 23.6301 0 23.6301 0C23.6301 0 25.6296 16.9551 21.0325 21.5522C16.9497 25.635 10.6139 26.0917 6.02707 22.9224L9.72301 18.3869L15.6313 17.1113L10.8084 16.6291L13.8734 13.5084L17.3623 12.7441L14.6035 11.927L17.3623 6.95017L13.4382 11.3518L11.9228 9.21337L12.4562 12.7441L9.72301 15.8253L8.45603 11.927V17.1113L4.64923 21.8085Z"
    />
  </svg>
);

export default Grass;
