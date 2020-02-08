import { makeStyles } from "@material-ui/styles";
const centrar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default makeStyles({
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centrar
  },
  cardContainer: {
    flexDirection: "column",
    ...centrar,
    width: 400,
    height: 200,
    padding: "2rem"
  },
  title: {
    fontSize: "4rem"
  },

  titleGridContainer: {
    ...centrar
  },

  textFieldSerach: {
    width: "90%"
  },
  searchButton: {
    marginLeft: ".5rem"
  },

  buttonsContainer: {
    marginTop: ".5rem"
  },
  MovieIcon: {
    fontSize: "4rem"
  }
});
