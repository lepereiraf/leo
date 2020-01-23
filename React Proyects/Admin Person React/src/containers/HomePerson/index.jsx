import React, { useCallback } from "react";
import { Button, Container, Grid, Card } from "@material-ui/core";
import useMount from "../../hooks/useMount";
import { getPerson, delPerson } from "../../actions/personActions";
import { useDispatch, useSelector } from "react-redux";
import Person from "../../components/Person";
import AppBar from "../../components/AppBar";
import { useActions } from "../../hooks";
import Modal from "../../components/Modal";
const Persons = () => {
  const dispatch = useDispatch();

  const { personas } = useSelector(({ personReducer }) => personReducer);
  const { onDeletePerson } = useActions({ onDeletePerson: delPerson });

  const handleGetPerson = useCallback(element => dispatch(getPerson()), [
    dispatch
  ]);

  useMount(async () => {
    await handleGetPerson();
  });

  const renderPerson = () => {
    if (personas) {
      return personas.map((value, index) => (
        <Card
          key={index}
          style={{
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            opacity: 0.9
          }}
        >
          <Person {...value}></Person>
          <Grid style={{ flexDirection: "row" }}>
            <Modal {...value} />
            <Button
              variant='contained'
              color='secondary'
              style={{
                marginTop: "5px",
                marginBottom: "8px",
                marginLeft: "10px",
                width: "90px"
              }}
              onClick={() => {
                onDeletePerson(value.id);

                setTimeout(async () => {
                  await handleGetPerson();
                }, 1000);
              }}
            >
              borrar
            </Button>
          </Grid>
        </Card>
      ));
    }
  };

  return (
    <Container
      style={{
        backgroundImage: `url(
      "https://images4.alphacoders.com/667/667236.jpg")`,
        backgroundPosition: "25% 75%"
      }}
    >
      <Grid>
        <AppBar></AppBar>
      </Grid>
      <Grid>{renderPerson()}</Grid>
    </Container>
  );
};

export default Persons;
