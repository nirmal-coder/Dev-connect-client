import React from "react";
import { Link, useLocation } from "react-router";

const NavigationItems = ({ name, path, icon }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <li className="list-none p-1">
      <Link className={`no-underline  text-2xl `} to={path}>
        {icon}
      </Link>
    </li>
  );
};

export default NavigationItems;
