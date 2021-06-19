import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Pagination.scss";
import { FiRewind, FiFastForward } from "react-icons/fi";

const Pagination = () => {
  const {
    totalPages,
    page,
    category,
    subcategory,
    filterByBrand,
  } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const goPage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages && newPage !== page) {
      dispatch({
        type: "SET_PAGE",
        payload: newPage,
      });
    }
  };

  useEffect(() => {
    if(page !== 1) {
      dispatch({
        type: "SET_PAGE",
        payload: 1,
      });
    }
  }, [category, subcategory, filterByBrand]);

  return (
    <div className="pagination">
      <div className="pagination-item" onClick={() => goPage(page - 1)}>
        <FiRewind />
      </div>
      {[...new Array(totalPages)].map((_, index) => (
        <div
          key={index}
          onClick={() => goPage(index + 1)}
          className={`pagination-item ${page === index + 1 ? "current" : ""}`}
        >
          {index + 1}
        </div>
      ))}
      <div className="pagination-item" onClick={() => goPage(page + 1)}>
        <FiFastForward />
      </div>
    </div>
  );
};

export default Pagination;
