import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

export default function Header() {
  const [theme, setTheme] = React.useState("light");
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
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
          <div className="cart">
            <CiShoppingCart />
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
