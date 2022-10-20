//this function generate id for array of objects "Comments"

const uniqueId = () => Math.random().toString(16).substring(3, 7);

// this part convert date into the format dd/mm/yyyy

let myDate = new Date();
let year = myDate.toLocaleString("default", { year: "numeric" });
let month = myDate.toLocaleString("default", { month: "2-digit" });
let day = myDate.toLocaleString("default", { day: "2-digit" });
let changedDate = day + "/" + month + "/" + year;

//this array of objects "Comments" store information about the comments

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

//this function created elements, added classes

const commentSection = (commentsObj, commentsContainer) => {
  const commentsItem = document.createElement("div");
  commentsItem.classList.add("comments");
  commentsItem.setAttribute("id", commentsObj.id);

  const commentsLeft = document.createElement("div");
  commentsLeft.classList.add("comments__left");

  const commentsRight = document.createElement("div");
  commentsRight.classList.add("comments__right");

  const commentsImg = document.createElement("img");
  commentsImg.classList.add("comments__left--img");

  const commentsUser = document.createElement("h");
  commentsUser.classList.add("comments__right--user");

  commentsUser.innerText = commentsObj.name;
  const commentsDate = document.createElement("p");
  commentsDate.classList.add("comments__right--date");
  commentsDate.innerText = commentsObj.timestamp;

  const commentsText = document.createElement("p");
  commentsText.classList.add("comments__right--comment");
  commentsText.innerText = commentsObj.text;

  commentsContainer.appendChild(commentsItem);
  commentsItem.appendChild(commentsLeft);
  commentsItem.appendChild(commentsRight);
  commentsLeft.appendChild(commentsImg);
  commentsRight.appendChild(commentsUser);
  commentsRight.appendChild(commentsDate);
  commentsRight.appendChild(commentsText);
};

// this function clear section and iterate over comments elements

const render = () => {
  const commentsContainer = document.querySelector(".section");
  commentsContainer.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
    commentSection(comments[i], commentsContainer);
  }
};

render();
