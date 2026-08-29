import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./home/container/home-page";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h2>about</h2>} />
        <Route path="/blog" element={<h2>blog</h2>} />
        <Route path="/resume" element={<h2>resume</h2>} />
      </Routes>
    </BrowserRouter>
  )

};

export default Router
