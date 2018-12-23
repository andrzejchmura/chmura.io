import React from "react";
import cx from "classnames";
import { Link as GatsbyLink } from "gatsby";
import css from "./typography.module.css";

export const H1 = ({ children, inverted }) => {
  return (
    <h1
      className={cx({
        [css.h1]: true,
        [css.inverted]: inverted
      })}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, inverted }) => {
  return (
    <h2
      className={cx({
        [css.h2]: true,
        [css.inverted]: inverted
      })}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, inverted }) => {
  return (
    <h3
      className={cx({
        [css.h3]: true,
        [css.inverted]: inverted
      })}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, inverted }) => {
  return (
    <h4
      className={cx({
        [css.h4]: true,
        [css.inverted]: inverted
      })}
    >
      {children}
    </h4>
  );
};

export const Link = ({ children, className, ...rest }) => {
  return (
    <GatsbyLink
      className={cx({
        [css.link]: true,
        [className]: className
      })}
      {...rest}
    >
      {children}
    </GatsbyLink>
  );
};
