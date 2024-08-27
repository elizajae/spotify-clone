import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon }) {
  return (
    <div
      className="sidebarOption"
      style={{
        marginBottom: Icon ? "20px" : "0px",
      }}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
