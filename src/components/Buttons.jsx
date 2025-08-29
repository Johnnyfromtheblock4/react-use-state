import React from "react";

const Buttons = ({ title, onSelect, isActive }) => {
  const active = isActive ? "btn-warning" : "btn-primary";
  return (
    <button className={`btn ${active} me-2`} onClick={() => onSelect()}>
      {title}
    </button>
  );
};

export default Buttons;
