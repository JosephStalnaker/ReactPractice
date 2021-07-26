import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Milo",
      animal: "cat",
      breed: "Siamese",
    }),
    React.createElement(Pet, {
      name: "Optimus",
      animal: "dog",
      breed: "Pom",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
