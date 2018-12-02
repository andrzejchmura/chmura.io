import React from "react";
import cx from "classnames";
import css from "./navigation.module.css";
import Icon from "../../components/Icon/Icon";
import Icons from "../../components/Icon/Icons";
import { Link } from "../../components/Typography/Typography";

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
      <header className={css.container}>
        <nav className={css.wrapper}>
          <div className={css.navigation}>
            <Link to="/">
              <h3>{title}</h3>
            </Link>
            <Icon className={css.button} onClick={this.toggleOpen}>
              {open ? Icons.Close : Icons.Arrow}
            </Icon>
          </div>
          <ul
            className={cx({
              [css.list]: true,
              [css.open]: open
            })}
          >
            {routes.map(route => (
              <li key={route} className={css.link}>
                <Link to={route}>{route}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navigation;
