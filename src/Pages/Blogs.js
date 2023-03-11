import React from "react";
import { useLocation } from "react-router-dom";
function Blogs() {
  const location = useLocation();
  console.log(location.state);
  return <div>This is a Blog!</div>;
}

export default Blogs;
