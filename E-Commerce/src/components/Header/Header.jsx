import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../../redux/cartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function Header() {
  const [theme, setTheme] = React.useState("light");
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const dispatch = useDispatch();

  const { cartItems } = useSelector((store) => store.cart);
  return (
    <header className={theme}>
      <div className="container">
        <div className="logo">
          <h1>MyApp</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">NavItems1</a>
            </li>
            <li>
              <a href="#">NavItems2</a>
            </li>
            <li>
              <a href="#">NavItems3</a>
            </li>
            <li>
              <a href="#">NavItems4</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <div className="cart2">
            <IconButton aria-label="cart" onClick={() => dispatch(setDrawer())}>
              <StyledBadge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
          <div className="user">
            <CiUser />
          </div>
          <div className="theme-toggle">
            {theme === "dark" ? (
              <CiLight className="light-icon" onClick={handleChangeTheme} />
            ) : (
              <FaRegMoon className="dark-icon" onClick={handleChangeTheme} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
