import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from "./pages/Author";
import Authors from "./pages/Authors";
import Book from "./pages/Book";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Publisher from "./pages/Publisher";
import Publishers from "./pages/Publishers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:id" element={<Author />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/publishers/:id" element={<Publisher />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
