import React from "react";
import cx from "classnames";
import { Link as GatsbyLink } from "gatsby";
import css from "./typography.module.css";

export const H1 = ({ children, inverted, className }) => {
  return (
    <h1
      className={cx({
        [css.h1]: true,
        [css.inverted]: inverted,
        [className]: className
      })}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, inverted, className }) => {
  return (
    <h2
      className={cx({
        [css.h2]: true,
        [css.inverted]: inverted,
        [className]: className
      })}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, inverted, className }) => {
  return (
    <h3
      className={cx({
        [css.h3]: true,
        [css.inverted]: inverted,
        [className]: className
      })}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, inverted, className }) => {
  return (
    <h4
      className={cx({
        [css.h4]: true,
        [css.inverted]: inverted,
        [className]: className
      })}
    >
      {children}
    </h4>
  );
};

export const Link = ({ children, isSecondary, className, ...rest }) => {
  return (
    <GatsbyLink
      className={cx({
        [css.link]: true,
        [css.secondary]: isSecondary,
        [className]: className
      })}
      {...rest}
    >
      {children}
    </GatsbyLink>
  );
};
