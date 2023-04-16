import React from "react";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";
function BookCard({
  bookName,
  bookImg,
  bookAuthor,
  bookLink,
  bookPage,
  bookDesc,
}) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="col-12 col-md-4 book-card mt-5">
        <div className="card border-0 h-100">
          <img src={bookImg} className="mx-auto" alt="..." />
          <div className=" d-flex align-items-center justify-content-between mx-3 mt-1">
            <Link
              to={bookLink}
              target="_blank"
              className="book-card-link w-50 border-end border-dark text-end fs-9 pe-2"
            >
              Preview
            </Link>
            <span
              type="button"
              className="book-card-link w-50 text-start fs-9 ms-2"
              onClick={() => setModalShow(true)}
            >
              Detail
            </span>
            <BookModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              bookname={bookName}
              booklink={bookLink}
              bookauthor={bookAuthor}
              bookpage={bookPage}
              bookdesc={bookDesc}
            />
          </div>
          <span
            className="fw-semibold mt-3 text-center fs-8 mx-5"
            title={bookName}
          >
            {bookName.length > 42 ? `${bookName.slice(0, 42)} ...` : bookName}
          </span>
          <hr className="col-4 mx-auto" />
          <ul className="list-unstyled">
            {bookAuthor &&
              bookAuthor.map((item, index) => {
                return (
                  <li key={index} className="text-center fs-9">
                    {item.toUpperCase()}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BookCard;
