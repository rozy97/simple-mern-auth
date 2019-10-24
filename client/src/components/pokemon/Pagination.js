import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div
      style={{ display: "flex" }}
      className="mt-3 mb-5 mr-auto ml-auto col-lg-2"
    >
      {gotoPrevPage && (
        <button className="btn mr-auto" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="btn ml-auto" onClick={gotoNextPage}>
          {"  "}
          Next{"  "}
        </button>
      )}
    </div>
  );
}
