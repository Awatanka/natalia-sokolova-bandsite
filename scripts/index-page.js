// const navLink = document.querySelector(".header__menu");
// const menuLink = document.querySelector(".header__menu-item");
// for (let i = 0; i < navLink.length; i++) {
//   navLink[i].addEventListener("click", function () {
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// let header = document.querySelector(".header__menu-item");
// let btns = header.querySelectorAll(".header__menu-item--link");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }
//     this.className += " active";
//   });
// }

// let headerMenu = document.querySelectorAll(".header__menu");
// let headerMenuItems = document.querySelectorAll(".header__menu-item");

// for (let i = 0; i < headerMenuItems.length; i++) {
//   headerMenuItems[i].addEventListener("click", function (event) {
//     // for (let x = 0; x < navlist.length; x++) {
//     // if (navlist[x] == event.target) {
//     let current = document.getElementsByClassName("active");
//     if (current.length > 0) {
//       current[0].classList.remove("active");
//     }
//     this.classList.add("active");
//     console.log(event);
//     // }
//     // } else {
//     //   navlist[x].classList.remove("active");
//     // }
//     // }
//   });
// }

const userURL =
  "https://project-1-api.herokuapp.com/comments/?api_key=3ee1c4f0-fe60-4286-8f27-da9b85a4cfa9";

// this function send response to server and ask all information
function getComments() {
  axios.get(userURL).then((response) => {
    console.log(response.data);
    render(response.data);
  });
}

getComments();

// this part convert date into the format dd/mm/yyyy

function convertData(myDate) {
  let date = new Date(myDate).toLocaleDateString("en-GB");
  return date;
}

/* <button id="like" onclick="liked()" class="like">
  <i class="fa fa-thumbs-up"></i>
  <span class="likeButton__counter">12</span>
  <span class="icon">Like</span>
</button>; */

/* <div class="likeButton">
<a href="" class="likeButton__image" id="image" name="image">
   
   <i class="fa fa-thumbs-up"></i>
        </a>
     */

//this block create elements, add classes

const commentSection = (dataObj, commentsContainer) => {
  const commentsItem = document.createElement("div");
  commentsItem.classList.add("comments");
  commentsItem.setAttribute("id", dataObj.id);

  const commentsLeft = document.createElement("div");
  commentsLeft.classList.add("comments__left");

  const commentsRight = document.createElement("div");
  commentsRight.classList.add("comments__right");

  const commentsImg = document.createElement("img");
  commentsImg.classList.add("comments__left-img");

  const commentsUser = document.createElement("h");
  commentsUser.classList.add("comments__right-user");

  commentsUser.innerText = dataObj.name;
  const commentsDate = document.createElement("p");
  commentsDate.classList.add("comments__right-date");
  commentsDate.innerText = convertData(dataObj.timestamp);

  const commentsText = document.createElement("p");
  commentsText.classList.add("comments__right-comment");
  commentsText.innerText = dataObj.comment;

  const commentsActions = document.createElement("div");
  commentsActions.classList.add("comments__right-action");

  const buttonLike = document.createElement("button");
  buttonLike.classList.add("fa", "fa-heart", "like");
  buttonLike.innerText = dataObj.likes;

  commentsItem.addEventListener("click", (event) => {
    console.log(event.target);
  });

  buttonLike.addEventListener("click", (event) => {
    console.log(event.target);
    let updateLikesURL = `https://project-1-api.herokuapp.com/comments/${dataObj.id}/like/?api_key=3ee1c4f0-fe60-4286-8f27-da9b85a4cfa9`;
    console.log("ghghgh");
    axios.put(updateLikesURL).then((response) => {
      console.log(response.data);
      event.target.innerText = response.data.likes;
    });
  });

  const buttonBin = document.createElement("button");
  buttonBin.classList.add("bin", "fa", "fa-trash");

  buttonBin.addEventListener("click", (event) => {
    let deleteCommentURL = `https://project-1-api.herokuapp.com/comments/${dataObj.id}/?api_key=3ee1c4f0-fe60-4286-8f27-da9b85a4cfa9`;

    axios.delete(deleteCommentURL).then((response) => {
      getComments();
    });
  });

  commentsItem.appendChild(commentsLeft);
  commentsItem.appendChild(commentsRight);
  commentsLeft.appendChild(commentsImg);
  commentsRight.appendChild(commentsUser);
  commentsRight.appendChild(commentsDate);
  commentsRight.appendChild(commentsText);
  commentsActions.appendChild(buttonLike);
  commentsActions.appendChild(buttonBin);
  commentsRight.appendChild(commentsActions);
  commentsContainer.appendChild(commentsItem);
};

// this function clear section and iterate over comments elements

const render = (data) => {
  const sortedComments = data.sort(
    (commentOne, commentTwo) => commentTwo.timestamp - commentOne.timestamp //sorted comments
  );
  const commentsContainer = document.querySelector(".section");
  commentsContainer.innerHTML = ""; // cleared section
  for (let i = 0; i < sortedComments.length; i++) {
    commentSection(sortedComments[i], commentsContainer); // iterated over comments
  }
};

// this function submit form

const addComment = (event) => {
  event.preventDefault();
  const commenterName = event.target.userName.value;
  const commentText = event.target.userComment.value;

  if (!commenterName) {
    showError("Please, provide your name"); // did the validation
    return;
  }
  if (!commentText) {
    showError("Please, provide your comment");
    return;
  } else if (commentText === "Add a new comment") {
    showError("Please, provide your personal comment");
    return;
  }

  axios // send body
    .post(userURL, {
      name: commenterName,
      comment: commentText,
    })
    .then((response) => {
      console.log(response.data);
      getComments();
    });

  // called function with comments to add response
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
