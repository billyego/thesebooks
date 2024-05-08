import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CollectionOfCards from "./components/CollectionOfCards";
import NewBook from "./components/NewBook";
import BookDetails from "./components/BooksDetails";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<CollectionOfCards />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/newbook" element={<NewBook />} />
    </Routes>
  </div>
);
}
export default App;