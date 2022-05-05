import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-link-container">
          <Link className="Nav-link" to="/shop">
            shop
          </Link>
          <Link className="Nav-link" to="/sign-in">
            sign-in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
