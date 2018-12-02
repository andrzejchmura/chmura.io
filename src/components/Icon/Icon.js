import React from "react";

const Icon = ({ children, ...rest }) => {
  return (
    <button {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#0076FF"
      >
        {children}
      </svg>
    </button>
  );
};

export default Icon;
