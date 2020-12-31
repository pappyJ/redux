import React from "react";

import "./search-box.style.css";

export const SearchBox = ({ inputText, inputAction }) => (
  <input
    className="search"
    type="search"
    placeholder={inputText}
    onChange={inputAction}
  />
);
