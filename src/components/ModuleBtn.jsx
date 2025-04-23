import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link to={url} className="bg-blue-600 h-full text-white flex flex-col items-center justify-center p-5 rounded-lg gap-3">
      {icon}
      {name}
    </Link>
  );
};

export default ModuleBtn;
