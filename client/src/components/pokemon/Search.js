import React from "react";

export default function SearchBox({ goToSearchPage, handleChange }) {
  return (
    <div className="row mb-5">
      <div className="col-md-6 m-auto">
        <div className="search-box">
          <form className="search-form">
            <input
              className="form-control"
              placeholder="search pokemon..."
              type="text"
              // onKeyPressCapture={goToSearchPage}
              onChange={handleChange}
            />
            <button
              className="btn btn-link search-btn"
              type="submit"
              onClick={goToSearchPage}
            >
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
