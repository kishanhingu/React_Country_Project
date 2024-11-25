import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleNavClick = (e) => {
    const btnClick = e.target;
    console.log(btnClick);

    if (!btnClick.classList.contains("active")) {
      setShowNav(false);
    } else {
      setShowNav(false);
    }
  };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={showNav ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleNavClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleNavClick}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" onClick={handleNavClick}>
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleNavClick}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              {showNav ? <IoMdClose /> : <IoIosMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
