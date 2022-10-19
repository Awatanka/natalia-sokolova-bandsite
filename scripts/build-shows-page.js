const card = document.createElement("div");
card.classList = "card-body";

// Dynamically change the styles of an element
window.addEventListener("resize", function (event) {
  if (window.innerWidth <= 320) {
    cardElement.update({ style: { base: { fontSize: "13px" } } });
  } else {
    cardElement.update({ style: { base: { fontSize: "16px" } } });
  }
});

const data = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
];

const button = document.querySelector("button");
button.addEventListener(
  "click",
  () => {
    console.log("clicked");
  },
  false
);
