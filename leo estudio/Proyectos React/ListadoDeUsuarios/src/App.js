import React from "react";
import Home from "./pages/home";
import Form from "./pages/form";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = ({ store }) => {
  //recivimos la store por destrusturing
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={Form} />
        </div>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
