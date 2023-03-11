import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  function nav() {
    navigate("/blogs", { state: { id: 1, name: "sabaoon" } });
  }
  return (
    <div>
      This is Home Page!
      <button onClick={() => nav()}> Click Me</button>
    </div>
  );
}

export default Home;
