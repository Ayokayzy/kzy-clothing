import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/context.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  function toggleIsCartOpen() {
    return setIsCartOpen(!isCartOpen);
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <span>
              <NavLink to="/auth" onClick={signOutUser}>
                {" "}
                SIGN OUT{" "}
              </NavLink>
            </span>
          ) : (
            <span>
              <NavLink to="/auth">
                SIGN IN
              </NavLink>
            </span>
          )}
          <CartIcon toggle={toggleIsCartOpen} />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
