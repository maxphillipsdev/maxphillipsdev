import React from "react";

interface Props {
  /** TailwindCSS style width and height. */
  size?: string;
}

const MenuIcon: React.FC = ({ size = 6 }) => {
  return (
    <svg
      className={`w-${size} h-${size}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  );
};

export default MenuIcon;
