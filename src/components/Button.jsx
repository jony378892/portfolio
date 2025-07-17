import React from "react";
import { Link } from "react-router";

function Button({ to, children }) {
  return (
    <Link to={to}>
      <button className="px-5 sm:px-8 py-2 border border-gray-200 text-white rounded-md">
        {children}
      </button>
    </Link>
  );
}

export default Button;
