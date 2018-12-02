import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
import css from "./navigation.module.css";
import Icon from "../../components/Icon/Icon";
import Icons from "../../components/Icon/Icons";

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
            <Icon className={css.button} onClick={this.toggleOpen}>
              {open ? Icons.Close : Icons.Arrow}
            </Icon>
          </div>
          <nav
            className={cx({
              [css.list]: true,
              [css.open]: open
            })}
          >
            {routes.map(route => (
              <Link key={route} to={route} className={css.link}>
                {route}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
