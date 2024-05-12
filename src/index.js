import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//Component
//Start the name of the component with capital letters
// Everytime you think of component think of function!

// const author = "Jordan Moore";
// const title = "Interesting Facts For Curious Minds";
// const img = "https://m.media-amazon.com/images/I/913C+MR3S5L._SY342_.jpg";

const firstBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

const secondBook = {
  author: "Krishna Hannah",
  title: "The Woman: A Novel",
  img: "https://m.media-amazon.com/images/I/913C+MR3S5L._SY342_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>Lorem ipsum dolor</p>
        <button>Click Me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  const { author, title, img, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
      {/* <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.fuck}</p>
      <p>{props.number}</p> */}
    </article>
  );
};
// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/913C+MR3S5L._SY342_.jpg"
//     alt="The Women: A Novel"
//   />
// );
// const Title = () => {
//   return <h2>The Women: A Novel</h2>;
// };
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
// };
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
//     Krishna Hannah
//   </h4>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
export default BookList;
