import { Card, Button } from "react-bootstrap";

import styled from "styled-components";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";

const SingleMovieCard = styled(Card)`
  width: 20vw;
  height: 100%;
  margin: 2.5vh;
  border-radius: 10%;
`;

const StyledImg = styled(Card.Img)`
  width: 20vw;
  height: 55vh;
  border-top-right-radius: 10%;
  border-top-left-radius: 10%;
`;

const StyledText = styled(Card.Text)`
  font-size: 12px;
`;

const Movie = (props) => {
  const [modalShow, setModalShow] = useState(false);
  // const [isFav, setIsFav] = useState(false);

  const handleDelete = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER}deleteMovie/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      console.log("deleted");
      console.log(id);
    }
  };

  const onClickHandler = () => {
    setModalShow(true);
  };

  const onHideHandler = () => {
    setModalShow(false);
    // setIsFav(false);
  };

  let buttonRender;
  if (!props.fromFav === true) {
    buttonRender = (
      <Button variant="secondary" onClick={onClickHandler}>
        Add To Favorites
      </Button>
    );
  } else {
    buttonRender = (
      <>
        <Button
          variant="secondary"
          onClick={() => {
            handleDelete(props.data.id);
          }}
        >
          Delete
        </Button>{" "}
        <Button variant="secondary"> Update </Button>
      </>
    );
  }
  return (
    <>
      <SingleMovieCard key={props.data.title}>
        <StyledImg variant="top" src={`https://image.tmdb.org/t/p/w1280/${props.data.poster_path}`} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <StyledText>{props.data.overview}</StyledText>
          {buttonRender}
        </Card.Body>
      </SingleMovieCard>
      <ModalMovie show={modalShow} movieData={props.data} onHide={onHideHandler} />
    </>
  );
};

export default Movie;
