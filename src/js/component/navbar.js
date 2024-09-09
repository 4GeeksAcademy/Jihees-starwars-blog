import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleDelete = (index) => {
    actions.deleteFavorite(index);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3 p-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Star Wars</span>
      </Link>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites [{store.favorites.length}]
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {store.favorites && store.favorites.length > 0 ? (
            store.favorites.map((item, index) => (
              <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                <Link to={`/details/${item.category}/${item.index}`}>{item.name}</Link>
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleDelete(index)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
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