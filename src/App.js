import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authors from "./pages/Authors";
import Book from "./pages/Book";
import Books from "./pages/Books";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
