let comments = [
  {
    id: 1,
    author: "John Q. Commenter",
    timestamp: new Date(),
  },
  {
    id: 2,
    text: "This is the second comment.",
    timestamp: new Date(),
  },
  /* Test for empty comment */
  {
    id: 3,
  },
];

function displayComment(commentObj) {
  const commentSection = document.querySelector("section");
  commentSection.classList.add("comments__item");
  const individualComment = document.createElement("div");
  commentSection.appendChild(individualComment);
  individualComment.innerText = comments[0].text;
}
