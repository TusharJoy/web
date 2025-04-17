import * as React from "react";
const SvgFavicon = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={32} height={32} rx={16} fill="#4F46E5" />
    <path
      d="M10 8H22M16 8V24"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgFavicon;
