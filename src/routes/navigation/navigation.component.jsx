import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/context.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  function toggleIsCartOpen() {
    return setIsCartOpen(!isCartOpen);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span>
              <Link to="/auth" className="nav-link" onClick={signOutUser}>
                {" "}
                SIGN OUT{" "}
              </Link>
            </span>
          ) : (
            <span>
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            </span>
          )}
          <CartIcon toggle={toggleIsCartOpen} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
