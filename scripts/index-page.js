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

//this block create elements, add classe

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

  commentsItem.addEventListener("click", (event) => {
    console.log(event.target);
  });

  commentsItem.appendChild(commentsLeft);
  commentsItem.appendChild(commentsRight);
  commentsLeft.appendChild(commentsImg);
  commentsRight.appendChild(commentsUser);
  commentsRight.appendChild(commentsDate);
  commentsRight.appendChild(commentsText);
  commentsContainer.appendChild(commentsItem);
};

// this function clear section and iterate over comments elements

const render = () => {
  const commentsContainer = document.querySelector(".section");
  commentsContainer.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
    commentSection(comments[i], commentsContainer);
  }
};

render(comments);

// this function submit form

const addComment = (event) => {
  event.preventDefault();
  const commenterName = event.target.userName.value;
  const commentText = event.target.userComment.value;
  if (!commenterName) {
    showError("Please, provide your name");
    return;
  }
  if (!commentText) {
    showError("Please, provide your comment");
    return;
  } else if (commentText === "Add a new comment") {
    showError("Please, provide your personal comment");
    return;
  }

  const newComment = {
    id: uniqueId(),
    name: commenterName,
    text: commentText,
    timestamp: changedDate,
  };

  comments.unshift(newComment);

  const sortedComments = comments.sort(
    (commentOne, commentTwo) => commentTwo.timestamp - commentOne.timestamp
  );

  render(sortedComments);

  // clear everything from the form
  event.target.reset();
};

const commentForm = document.querySelector(".form");
commentForm.addEventListener("submit", addComment);

const clearError = (inputField, addError) => {
  inputField.removeChild(addError);
  //inputField.classList.remove("comment__error");
  inputField.classList.remove("comment__input--error");
};

/*
const showError = (fieldName, errorMessage) => {
  const inputField = document.querySelector(".form__right");
  inputField.classList.add("comment__input--error");
  const addError = document.createElement("p");
  addError.textContent = errorMessage;
  addError.classList.add("comment__error");
  commentForm.appendChild(addError);

  setTimeout(() => clearError(inputField, addError), 6000);
};

*/

const showError = (errorMessage) => {
  const formRight = document.querySelector(".form__right");
  const inputField = document.createElement("div");
  inputField.classList.add("comment__input--error");
  const addError = document.createElement("p");
  addError.textContent = errorMessage;
  inputField.appendChild(addError);
  formRight.appendChild(inputField);

  setTimeout(() => clearError(inputField, addError, formRight), 2000);
};
