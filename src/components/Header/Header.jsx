import "./Header.css";
import Navbar from "./NavBar/NavBar";

const Header = () => {
  return (
    <>
      <div className="container">
        <a href="#" className="brand-logo">
          Obligatorio
        </a>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
