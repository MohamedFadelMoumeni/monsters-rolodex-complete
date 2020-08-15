import React from "react";
import "./Editor.css";

export const Editor = ({ handleChange1 }) => (
  <div className="Editor">
    <textarea width="100" height="100" onChange={handleChange1} />
  </div>
);
