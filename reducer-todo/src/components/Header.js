import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <header>
      <Link to="/">Todo List</Link>
      <nav>
        {pathname !== "/todo/add" && (
          <button onClick={() => history.push("/todo/add")}>+</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
