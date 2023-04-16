import SearchBook from "./components/SearchBook";
import BookList from "./components/BookList";
import { BookProvider } from "./context/BookContext";
function App() {
  return (
    <BookProvider>
      <SearchBook />
      <BookList />
    </BookProvider>
  );
}

export default App;
