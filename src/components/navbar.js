import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="btn btn-outline-light" to="/users/add">
            Add users
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
