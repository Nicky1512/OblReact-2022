import "./Header.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <>
      <div className="container">
        <a href="#" className="brand-logo nav-link">
          Obligatorio
        </a>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
