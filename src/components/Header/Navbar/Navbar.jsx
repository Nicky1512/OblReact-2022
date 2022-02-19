import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    /*     <div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 link-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-secondary">
            Calculadora
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 link-secondary">
            Stats
          </a>
        </li>
      </ul>
    </div> */

    <div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link
            className="nav-link px-2 link-secondary"
            to="/calculadora"
          >
            Calculadora
          </Link>
        </li>
        <li>
          <Link className="nav-link px-2 link-secondary" to="/stats">
            Stats
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
