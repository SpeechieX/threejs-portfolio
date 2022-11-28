import React, { useRef, useEffect, useState } from "react";

export default function TitleLogo() {
  const [nav, setNav] = useState(false);
  const navRef = useRef();
  navRef.current = nav;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNav(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const refresh = async () => window.location.reload();
  return (
    <div
      className="header -my-8 flex space-x-56 items-center"
      onClick={refresh}
    >
      <h1 className="title_logo text-2xl ">SPEECHIE FOR PREZ</h1>
      <div className="header_links">
        <ul className="flex-row">
          <li className="inline mx-2">Home</li>
          <li className="inline mx-2">Projects</li>
          <li className="inline mx-2">Blog</li>
          <li className="inline mx-2">Github</li>
        </ul>
      </div>
    </div>
  );
}
