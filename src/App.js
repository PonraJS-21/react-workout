import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Blogs from "./Pages/Blogs";
import LayoutComponent from "./Pages/LayoutComponent";

function App() {
  const onChangeMethod = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="first" element={<FirstComponent />} />
          <Route
            path="button"
            element={<Button onClick={(data) => onChangeMethod(data)} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
