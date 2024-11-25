import { IoCall } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuMailPlus } from "react-icons/lu";
import footerData from "../../API/footerApi.json";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const footerIcon = {
    IoCall: <IoCall />,
    FaMapLocationDot: <FaMapLocationDot />,
    LuMailPlus: <LuMailPlus />,
  };
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-three-column">
          {footerData.map((curEle, index) => {
            const { icon, title, details } = curEle;
            return (
              <div className="footer-contact" key={index}>
                <div className="icon">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-text">
            <p>
              Copyright &copy; 2024, All Right Reserved by & Contact to Click Here
              <NavLink to="mailto:kishanhingu9992@gmail.com">
                Kishan Hingu
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
