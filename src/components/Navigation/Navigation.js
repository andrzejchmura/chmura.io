import React from "react";
import cx from "classnames";
import css from "./navigation.module.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(previous => ({
      open: !previous.open
    }));
  }

  render() {
    const { title, routes } = this.props;
    const { open } = this.state;

    return (
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.navigation}>
            <h3>{title}</h3>
            <button className={css.button} onClick={this.toggleOpen}>
              {open ? "X" : "V"}
            </button>
          </div>
          <ul
            className={cx({
              [css.list]: true,
              [css.open]: open
            })}
          >
            {routes.map(route => (
              <li key={route} className={css.element}>
                route
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
