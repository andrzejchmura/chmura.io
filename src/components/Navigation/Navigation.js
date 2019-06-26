import React from "react";
import cx from "classnames";
import css from "./navigation.module.css";
import Icon from "../../components/Icon/Icon";
import Icons from "../../components/Icon/Icons";
import { Link } from "../../components/Typography/Typography";

// TODO: extract to config
const title = "chmura.io";
const routes = ["notes", "labs"];

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
    const { open } = this.state;

    return (
      <header className={css.container}>
        <div className={css.wrapper}>
          <div className={css.navigation}>
            <Link to="/">
              <Icon className={css.logo} alt={title}>
                {Icons.Logo}
              </Icon>
            </Link>
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
              <Link
                to={`/${route}`}
                key={route}
                className={css.link}
                activeClassName={css.active}
              >
                {route}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }
}

export default Navigation;
