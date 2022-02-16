import "./Header.css";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a
            href="#"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            Obligatorio
          </a>
          <Navbar />
        </header>
      </div>
    </>
  );
};

export default Header;
