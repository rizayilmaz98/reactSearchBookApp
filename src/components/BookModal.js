import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
function BookModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.bookname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span className="fw-semibold">Author:</span>
          <span>
            {" "}
            {props.bookauthor === undefined
              ? " No Author Information"
              : props.bookauthor.map((item) => item + " ")}
          </span>
        </p>
        <p>
          <span className="fw-semibold">Number of Pages:</span>
          <span> {props.bookpage}</span>
        </p>
        <p>
          <span className="fw-semibold">Book Description:</span>
          <span>
            {" "}
            {props.bookdesc === undefined ? " No Explanation" : props.bookdesc}
          </span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link
          to={props.booklink}
          target="_blank"
          className="btn btn-secondary text-decoration-none"
        >
          Book Preview
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal;
