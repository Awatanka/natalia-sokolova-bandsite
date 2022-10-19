const card = document.createElement("div");
card.classList = "card-body";

const button = document.querySelector("button");
button.addEventListener(
  "click",
  () => {
    console.log("clicked");
  },
  false
);
