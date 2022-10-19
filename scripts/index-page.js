var x = document.createElement("FORM");

let comments = [
  {
    id: 1,
    author: "John Q. Commenter",
    text: "This is the first comment.",
    timestamp: new Date(),
  },
  {
    id: 2,
    author: "Jane A. Opinionated",
    text: "This is the second comment.",
    timestamp: new Date(),
  },
  /* Test for empty comment */
  {
    id: 3,
  },
];

function displayComment(commentObj) {
  const commentSection = document.querySelector("main__comments");
  commentSection.classList.add("comments__item");
  const individualComment = document.createElement("div");
  commentSection.appendChild(individualComment);
}
