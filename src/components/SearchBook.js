import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import BookContext from "../context/BookContext";

function SearchBook() {
  const [searchInput, setSearchInput] = useState("");
  const { setSearch } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      alert("Enter a value");
    } else {
      setSearch(searchInput);
      setSearchInput("");
    }
  };

  return (
    <section className="searchSection d-grid align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-8 col-md-4 mx-auto">
            <form className="input-group mb-3" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Book"
                aria-label="Search Book"
                aria-describedby="searchInput"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="input-group-text" id="searchInput">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBook;
