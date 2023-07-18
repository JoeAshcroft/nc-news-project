import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <Link to="/">
          <li className="nav-li">Home</li>
        </Link>
        <Link to="/articles">
          <li className="nav-li">Articles</li>
        </Link>
        <Link to="/topics">
          <li className="nav-li">Topics</li>
        </Link>
        <Link to="/comments">
          <li className="nav-li">Comments</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
