import logo from "./reactLogo.png";

import Logout from "./Logout";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-between py-3 mb-4 border-bottom">
          <Link
            to="/dashboard"
            className="d-flex align-items-center mb-2"
          >
            <img
              src={logo}
              width="40"
              height="40"
              /* className="d-inline-block align-top" */
              alt="Logo react"
            />
          </Link>
          <Navbar />
          <Logout />
        </header>
      </div>
    </>
  );
};

export default Header;
