import React from "react";

const Tag = (props) => {
  return (
    <li className="bg-gray-100 text-black p-1 rounded text-xs font-medium">
      {props.tag}
    </li>
  );
};

export default Tag;
