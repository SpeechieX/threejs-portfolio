import React, { useState, useEffect, useContext } from "react";
import { NavigationContext } from "../contexts";

export default function Header(props) {
  const currentPage = useContext(NavigationContext);
  const [hover, setHover] = useState(false);
  const [page, setPage] = useState(`Home`);
  const navigateWithParams = (title) => {
    // setPage(`${title}`);
    console.log(title);
  };
  const titles = ["Home", "Projects", "About", "Contact"];
  return (
    <div className="Header">
      {titles.map((title) => (
        <h3
          className={!hover === true ? "navigation_links" : "hovered_link"}
          onClick={() => navigateWithParams(title)}
        >
          {title}
        </h3>
      ))}
    </div>
  );
}
