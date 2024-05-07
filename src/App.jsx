import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Root from "./Components/Layout/Root";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import UseScrollToTop from "../hooks/UseScrollToTop";
import Error404 from "./Pages/Error404";
import { Suspense } from "react";
import Blog from "./Pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <UseScrollToTop>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<Navigate to={"/"} />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </Suspense>
      </UseScrollToTop>
    </BrowserRouter>
  );
}

export default App;
