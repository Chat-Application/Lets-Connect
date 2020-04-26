import React from "react";
import ReactDOM from "react-dom";
import Greeting from "components/Greeting";
import Profile from "components/Profile";
import "./css/style.css";

const App = () => {
  return (
    <>
      <header>
        <Greeting name="Students" />
        <h2> Just a sub heading </h2>{" "}
      </header>{" "}
      <Profile />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
