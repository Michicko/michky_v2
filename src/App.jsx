import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Root from "./Components/Layout/Root";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import UseScrollToTop from "../hooks/UseScrollToTop";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <UseScrollToTop>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<Navigate to={"/"} />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </UseScrollToTop>
    </BrowserRouter>
  );
}

export default App;
