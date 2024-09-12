import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import swLogo from "../../img/s_w_logo.png"

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    return () => {
      console.log("Nav Unmounted")
    }
  })

  const handleDelete = (index) => {
    actions.deleteFavorite(index);
  };

  return (
    <nav className="navbar mb-3 px-3 py-0">
      <Link to="/">
        <img id="logo" src={swLogo} alt="Starwars Logo" />
      </Link>
      <div className="btn-group">
        <button
          type="button"
          className="navbar-btn btn dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded={true}
          data-bs-auto-close="false"
        >
          <i className="me-1 fa-regular fa-star"></i>
          Favorites [{store.favorites.length}]
        </button>
        <ul className="dropdown-menu dropdown-menu-dark mt-1 dropdown-menu-end">
          {store.favorites && store.favorites.length > 0 ? (
            store.favorites.map((item, index) => (
              <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                <Link className="favlink" to={`/details/${item.category}/${item.index}`}>{item.name}</Link>
                <span
                  className="ms-2"
                  onClick={() => handleDelete(index)}
                >
                  <i className="fas fa-trash-alt"></i>
                </span>
              </li>
            ))
          ) : (
            <li className="dropdown-item">No Favorites</li>
          )}
        </ul>
      </div>
    </nav>
  );
};