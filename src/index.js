import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//Component
//Start the name of the component with capital letters
//Everytime you think of component think of function!
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/913C+MR3S5L._SY342_.jpg"
    alt="The Women: A Novel"
  />
);
const Title = () => {
  return <h2>The Women: A Novel</h2>;
};
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
//     Krishna Hannah
//   </h4>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
export default BookList;
