import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import CursorSpotlight from "./components/CursorSpotlight";
import CommandPalette from "./components/CommandPalette";

function App() {
  return (
    <>
      <CursorSpotlight />
      <CommandPalette />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </>
  );
}

export default App;
