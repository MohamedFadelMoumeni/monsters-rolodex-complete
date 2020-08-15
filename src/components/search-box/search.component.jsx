import React from "react";
import "./search.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    placeholder={placeholder}
    type="text"
    className="inputElement"
    onChange={handleChange}
  />
);
