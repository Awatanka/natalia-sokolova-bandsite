const uniqueId = () => Math.random().toString(16).substring(3, 7);

let myDate = new Date();
let year = myDate.toLocaleString("default", { year: "numeric" });
let month = myDate.toLocaleString("default", { month: "2-digit" });
let day = myDate.toLocaleString("default", { day: "2-digit" });
let changedDate = day + "/" + month + "/" + year;

let comments = [
  {
    id: uniqueId(),
    name: "Connor Walton",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    image: "https://picsum.photos/seed/picsum/200/300",
    timestamp: changedDate,
  },
  {
    id: uniqueId(),
    name: "Emilie Beach",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    timestamp: changedDate,
  },

  {
    id: uniqueId(),
    name: "Miles Acosta",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timestamp: changedDate,
  },
];

const commentSection = (commentsObj, commentsContainer) => {
  const commentsItem = document.createElement("div");
  commentsItem.classList.add("comments");
  commentsItem.setAttribute("id", commentsObj.id);

  const commentsDate = document.createElement("p");
  commentsDate.classList.add("comment__date");
  commentsDate.innerText = commentsObj.timestamp;

  const commentsImg = document.createElement("img");
  commentsImg.classList.add("comments__img");

  const commentsUser = document.createElement("h");
  commentsUser.classList.add("comments__user");
  commentsUser.innerText = commentsObj.name;

  const commentsText = document.createElement("p");
  commentsText.classList.add("comment__comment");
  commentsText.innerText = commentsObj.text;

  commentsContainer.appendChild(commentsItem);
  commentsItem.appendChild(commentsUser);
  commentsItem.appendChild(commentsDate);
  commentsItem.appendChild(commentsText);
  commentsItem.appendChild(commentsImg);
};

const render = () => {
  const commentsContainer = document.querySelector(".section");
  commentsContainer.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
    commentSection(comments[i], commentsContainer);
  }
};

render();

/*

function displayComment(commentObj) {
  const commentSection = document.querySelector("section");
  commentSection.classList.add("comments__item");
  const individualComment = document.createElement("div");
  commentSection.appendChild(individualComment);
  individualComment.innerText = comments[0].text;
}





taskName.setAttribute("src", "url", taskObj.id);
*/
