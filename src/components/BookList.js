import { useContext } from "react";
import BookContext from "../context/BookContext";
import BookCard from "./BookCard";
function BookList() {
  const { data, search } = useContext(BookContext);
  console.log(data);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <p className="text-center">
            <span className="fw-bold fs-7">Search : </span>
            <span className="fs-6">{search}</span>
          </p>
        </div>
        <hr className="col-10 mx-auto" />
      </div>
      {data === null ? (
        ""
      ) : (
        <div className="row gy-4 mt-4">
          {data.items.map((item) => {
            try {
              return (
                <BookCard
                  key={item.id}
                  bookName={item.volumeInfo.title}
                  bookAuthor={item.volumeInfo.authors}
                  bookLink={item.volumeInfo.previewLink}
                  bookImg={item.volumeInfo.imageLinks.thumbnail}
                  bookPage={item.volumeInfo.pageCount}
                  bookDesc={item.volumeInfo.description}
                />
              );
            } catch (err) {
              return (
                <BookCard
                  key={item.id}
                  bookName={item.volumeInfo.title}
                  bookAuthor={item.volumeInfo.authors}
                  bookLink={item.volumeInfo.previewLink}
                  bookImg={
                    "https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg"
                  }
                  bookPage={item.volumeInfo.pageCount}
                  bookDesc={item.volumeInfo.description}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default BookList;
