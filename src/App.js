import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
