import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChanged = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 1) return;

    onNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        className=" border-gray-400 border-2 rounded-lg shadow leading-tight w-full p-3"
        type="text"
        placeholder="Añadir categoría"
        onChange={onInputChanged}
        value={inputValue}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 rounded-md py-2 px-2 text-white font-bold my-4"
      >
        Agregar categoría
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
