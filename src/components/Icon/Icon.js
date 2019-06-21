import React from "react";

const Icon = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Icon;
