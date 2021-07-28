import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Milo",
//       animal: "cat",
//       breed: "Siamese",
//     }),
//     React.createElement(Pet, {
//       name: "Optimus",
//       animal: "dog",
//       breed: "Pom",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
