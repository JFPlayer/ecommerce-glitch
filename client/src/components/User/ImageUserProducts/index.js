import React from "react";

import "./ImageUserProducts.scss";
import { FaTrashAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

import Button from "../../Button";

const ImageUserProducts = ({ src, onClick, onClickDelete }) => {
  return (
    <div className="image-up">
      <img src={src} alt="" />
      <button 
        className="image-up__btn-main"
        onClick={onClick}
      >
        <span>
          Principal
        </span>
      </button>
      <button 
        className="image-up__btn-remove"
        onClick={onClickDelete}
      >
        <TiDelete />
      </button>
    </div>
  );
};

export const ImageUserProductsNew = ({ name, onChange }) => {
  return (
    <div className="image-up new">
      <label className="new-image__box">
        Nueva
        <br />
        Imagen
        <input
          className="input-file__input"
          type="file"
          name={name}
          accept=".png, .jpeg, .jpg"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default ImageUserProducts;
