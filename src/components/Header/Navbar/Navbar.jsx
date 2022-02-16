import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="wrapper">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <Link to="/">Home</Link> */}
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          {/* <Link to="/">Calcular</Link> */}
          <a href="#" className="nav-link">
            Calcular
          </a>
        </li>
        <li className="nav-item">
          {/* <Link to="/">Graphs</Link> */}
          <a href="#" className="nav-link">
            Graphs
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
