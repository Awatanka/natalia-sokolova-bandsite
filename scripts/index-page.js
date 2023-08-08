const userURL =
  "https://project-1-api.herokuapp.com/comments/?api_key=3ee1c4f0-fe60-4286-8f27-da9b85a4cfa9";

function getComments() {
  axios.get(userURL).then((response) => {
    const sortedComments = response.data.sort(
      (commentOne, commentTwo) => commentTwo.timestamp - commentOne.timestamp
    );
    render(sortedComments);
  });
}

function convertDate(myDate) {
  return new Date(myDate).toLocaleDateString("en-GB");
}

function createCommentElement(dataObj) {
  const commentsItem = document.createElement("div");
  commentsItem.classList.add("comments");
  commentsItem.setAttribute("id", dataObj.id);

  const commentsLeft = document.createElement("div");
  commentsLeft.classList.add("comments__left");

  const commentsRight = document.createElement("div");
  commentsRight.classList.add("comments__right");

  const commentsUser = document.createElement("h");
  commentsUser.classList.add("comments__right-user");
  commentsUser.innerText = dataObj.name;

  const commentsDate = document.createElement("p");
  commentsDate.classList.add("comments__right-date");
  commentsDate.innerText = convertDate(dataObj.timestamp);

  const commentsText = document.createElement("p");
  commentsText.classList.add("comments__right-comment");
  commentsText.innerText = dataObj.comment;

  const commentsActions = document.createElement("div");
  commentsActions.classList.add("comments__right-action");

  const buttonLike = createButton("button", "fa fa-heart like", dataObj.likes);
  buttonLike.addEventListener("click", () =>
    handleLike(dataObj.id, buttonLike)
  );

  const buttonBin = createButton("button", "bin fa fa-trash");
  buttonBin.addEventListener("click", () => handleDelete(dataObj.id));

  commentsActions.appendChild(buttonLike);
  commentsActions.appendChild(buttonBin);

  commentsItem.appendChild(commentsLeft);
  commentsItem.appendChild(commentsRight);
  commentsLeft.appendChild(createImage("comments__left-img"));
  commentsRight.appendChild(commentsUser);
  commentsRight.appendChild(commentsDate);
  commentsRight.appendChild(commentsText);
  commentsRight.appendChild(commentsActions);

  return commentsItem;
}

function createButton(type, classes, text) {
  const button = document.createElement(type);
  button.classList.add(...classes.split(" "));
  button.innerText = text || "";
  return button;
}

function createImage(className) {
  const img = document.createElement("img");
  img.classList.add(className);
  return img;
}

function handleLike(commentId, likeButton) {
  const updateLikesURL = `https://project-1-api.herokuapp.com/comments/${commentId}/like/?api_key=3ee1c4f0-fe60-4286-8f27-da9b85a4cfa9`;
  axios.put(updateLikesURL).then((response) => {
    likeButton.innerText = response.data.likes;
  });
}

function handleDelete(commentId) {
  const deleteCommentURL = `https://project-1-api.herokuapp.com/comments/${commentId}/?api_key=3ee1c4f0-fe60-4286-8f27-da9b85a4cfa9`;
  axios.delete(deleteCommentURL).then(() => getComments());
}

function render(data) {
  const commentsContainer = document.querySelector(".section");
  commentsContainer.innerHTML = "";
  data.forEach((comment) => {
    commentsContainer.appendChild(createCommentElement(comment));
  });
}

function addComment(event) {
  event.preventDefault();
  const commenterName = event.target.userName.value;
  const commentText = event.target.userComment.value;

  if (!commenterName || !commentText || commentText === "Add a new comment") {
    showError("Please provide valid information");
    return;
  }

  axios
    .post(userURL, { name: commenterName, comment: commentText })
    .then(() => {
      getComments();
      event.target.reset();
    });
}

function showError(errorMessage) {
  const formRight = document.querySelector(".form__right");
  const inputField = document.createElement("div");
  inputField.classList.add("comment__input--error");
  const addError = document.createElement("p");
  addError.textContent = errorMessage;
  inputField.appendChild(addError);
  formRight.appendChild(inputField);

  setTimeout(() => {
    formRight.removeChild(inputField);
  }, 2000);
}

const commentForm = document.querySelector(".form");
commentForm.addEventListener("submit", addComment);

getComments();
