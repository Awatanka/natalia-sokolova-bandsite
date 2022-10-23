/* Dynamically change the styles of an element
window.addEventListener("resize", function (event) {
  if (window.innerWidth <= 320) {
    cardElement.update({ style: { base: { fontSize: "13px" } } });
  } else {
    cardElement.update({ style: { base: { fontSize: "16px" } } });
  }
});
*/
const uniqueId = () => Math.random().toString(16).substring(3, 7);

//creqated array of objects
const shows = [
  {
    id: uniqueId(),
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Tue Sept 21 2021 ",
    venue: "Pier 3 East ",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Fri Oct 15 2021",
    venue: "View Loungee",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    id: uniqueId(),
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    id: uniqueId(),
    date: "Wed Dec 15 2021",
    venue: "Press Club ",
    location: "San Francisco, CA",
  },
];
/*
let header = function () {
  const showsHeader = document.createElement("h");
  showsHeader.classList.add("shows__header");
  showsHeader.innerText = "Shows";
  showsContainer.appendChild(showsHeader);
};

function tablet() {
  if (window.innerWidth >= 760) {
    const showsDateHeader = document.createElement("h");
    showsDateHeader.classList.add("shows__dateHeader");
    showsDateHeader.innerText = "DATE";

    const showsVenue = document.createElement("h");
    showsVenue.classList.add("shows__venueHeader");
    showsVenue.innerText = "VENUE";

    const showsLocation = document.createElement("h");
    showsLocation.classList.add("shows__locationHeader");
    showsLocation.innerText = "location";
    showsItem.appendChild(showsLocation);
    showsItem.appendChild(showsDateHeader);
    showsItem.appendChild(showsVenue);
  }
}

*/
/*
const headerShow = document.createElement("h");
headerShow.classList.add("shows__date--large");
headerShow.innerText = "date";
showsItem.appendChild(headerShow);
*/

const showsSection = (showsObj, showsContainer) => {
  const showsItem = document.createElement("div");
  showsItem.classList.add("shows");
  showsItem.setAttribute("id", showsObj.id);

  const showsDateHeader = document.createElement("h");
  showsDateHeader.classList.add("shows__dateHeader");
  showsDateHeader.innerText = "DATE";

  const showsDate = document.createElement("p");
  showsDate.classList.add("shows__date");
  showsDate.setAttribute("date", showsObj.date);
  showsDate.innerText = showsObj.date;

  const showsVenue = document.createElement("h");
  showsVenue.classList.add("shows__venueHeader");
  showsVenue.innerText = "VENUE";

  const showsVenueText = document.createElement("p");
  showsVenueText.classList.add("shows__venue");
  showsVenueText.setAttribute("venue", showsObj.venue);
  showsVenueText.innerText = showsObj.venue;

  const showsLocation = document.createElement("h");
  showsLocation.classList.add("shows__locationHeader");
  showsLocation.innerText = "location";

  const showsLocationText = document.createElement("p");
  showsLocationText.classList.add("shows__location");
  showsLocationText.setAttribute("location", showsObj.location);
  showsLocationText.innerText = showsObj.location;

  const btn = document.createElement("button");
  btn.classList.add("shows__button");
  btn.innerText = "BUY TICKETS";

  showsContainer.appendChild(showsItem);

  showsItem.appendChild(showsDateHeader);
  showsItem.appendChild(showsDate);
  showsItem.appendChild(showsVenue);
  showsItem.appendChild(showsVenueText);
  showsItem.appendChild(showsLocation);
  showsItem.appendChild(showsLocationText);
  showsItem.appendChild(btn);
};

const showsSectionLarge = (showsObj, showsContainer) => {
  const showsItem = document.createElement("div");
  showsItem.classList.add("shows");
  showsItem.setAttribute("id", showsObj.id);

  const showsDate = document.createElement("p");
  showsDate.classList.add("shows__date");
  showsDate.setAttribute("date", showsObj.date);
  showsDate.innerText = showsObj.date;

  const showsVenueText = document.createElement("p");
  showsVenueText.classList.add("shows__venue");
  showsVenueText.setAttribute("venue", showsObj.venue);
  showsVenueText.innerText = showsObj.venue;

  const showsLocationText = document.createElement("p");
  showsLocationText.classList.add("shows__location");
  showsLocationText.setAttribute("location", showsObj.location);
  showsLocationText.innerText = showsObj.location;

  const btn = document.createElement("button");
  btn.classList.add("shows__button");
  btn.innerText = "BUY TICKETS";

  showsContainer.appendChild(showsItem);

  showsItem.appendChild(showsDate);
  showsItem.appendChild(showsVenueText);
  showsItem.appendChild(showsLocationText);
  showsItem.appendChild(btn);
};

const render = () => {
  const showsContainer = document.querySelector(".section");
  showsContainer.innerHTML = "";
  for (let i = 0; i < shows.length; i++) {
    if (window.innerWidth <= 720) {
      showsSection(shows[i], showsContainer);
    } else {
      showsSectionLarge(shows[i], showsContainer);
    }
  }
};

window.addEventListener("resize", function (event) {
  render();
  console.log(shows);
});

render();

/*
const header = (showsContainer, showsItem) => {
  if (window.innerWidth <= 720) {
  const headerShow = document.createElement("h");
  headerShow.classList.add("shows__date--large");
  headerShow.innerText = "date";
  showsItem.appendChild(headerShow);
}
*/
/*
//cleaned my area to work
const render = () => {
  const showsContainer = document.querySelector(".section");
  showsContainer.innerHTML = "";
  for (let i = 0; i < shows.length; i++) {
    // window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 720) {
      showsSection(shows[i], showsContainer);
    } else {
      showsSection(shows[i], showsContainer);
    }
    // });
  }
};

window.addEventListener("resize", function (event) {
  render();
});
*/
