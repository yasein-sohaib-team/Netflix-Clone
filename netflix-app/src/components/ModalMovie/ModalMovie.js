import { useRef } from "react";
import styled from "styled-components";
// eslint-disable-next-line
import { Modal, Button, Form, ModalDialog } from "react-bootstrap";

const StyledModal = styled(Modal)`
  height: 100vh;
`;

const Img = styled.img`
  width: 100%;
`;

const ModalMovie = (props) => {
  const commentRef = useRef();
  async function submitHandler(e, movie) {
    e.preventDefault();
    const dataToBeSent = {
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      comment: movie.comment,
    };
    const url = `${process.env.REACT_APP_SERVER}addMovie`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBeSent),
    });
    const data = await response.json();
    console.log(response.status);
    console.log(data);
  }
  console.log(props.movieData);
  return (
    <StyledModal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.movieData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Img src={`https://image.tmdb.org/t/p/w1280/${props.movieData.poster_path}`} />
        <p>{props.movieData.overview}</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />

            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            {/* onClick={handleComment} */}
            Submit
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              submitHandler(e, props.movieData);
            }}
          >
            Add to Favorites
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </StyledModal>
  );
};

export default ModalMovie;
