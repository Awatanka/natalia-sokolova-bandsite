const userURL =
  "https://project-1-api.herokuapp.com/showdates/?api_key=3ee1c4f0-fe60-4286-8f27-da9b85a4cfa9";

function getShows() {
  axios.get(userURL).then((response) => {
    console.log(response.data);
    render(response.data);
  });
}

getShows();

function convertData(myDate) {
  let date = new Date(myDate).toLocaleDateString("en-GB", {
    weekday: "short",
    year: "numeric",
    day: "numeric",
    month: "short",
  });
  return date;
}

const showsSection = (dataObj, showsContainer) => {
  const showsItem = document.createElement("div");
  showsItem.classList.add("shows");
  showsItem.setAttribute("id", dataObj.id);

  const showsDateHeader = document.createElement("h");
  showsDateHeader.classList.add("shows__dateHeader");
  showsDateHeader.innerText = "DATE";

  const showsDate = document.createElement("p");
  showsDate.classList.add("shows__date");
  showsDate.setAttribute("date", dataObj.date);
  showsDate.innerText = convertData(dataObj.date);

  const showsVenue = document.createElement("h");
  showsVenue.classList.add("shows__venueHeader");
  showsVenue.innerText = "VENUE";

  const showsVenueText = document.createElement("p");
  showsVenueText.classList.add("shows__venue");
  showsVenueText.setAttribute("venue", dataObj.place);
  showsVenueText.innerText = dataObj.place;

  const showsLocation = document.createElement("h");
  showsLocation.classList.add("shows__locationHeader");
  showsLocation.innerText = "location";

  const showsLocationText = document.createElement("p");
  showsLocationText.classList.add("shows__location");
  showsLocationText.setAttribute("location", dataObj.location);
  showsLocationText.innerText = dataObj.location;

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

const showsSectionLarge = (dataObj, showsContainer) => {
  const showsItem = document.createElement("div");
  showsItem.classList.add("shows");
  showsItem.setAttribute("id", dataObj.id);

  const showsDate = document.createElement("p");
  showsDate.classList.add("shows__date");
  showsDate.setAttribute("date", dataObj.date);
  showsDate.innerText = convertData(dataObj.date);

  const showsVenueText = document.createElement("p");
  showsVenueText.classList.add("shows__venue");
  showsVenueText.setAttribute("venue", dataObj.venue);
  showsVenueText.innerText = dataObj.place;

  const showsLocationText = document.createElement("p");
  showsLocationText.classList.add("shows__location");
  showsLocationText.setAttribute("location", dataObj.location);
  showsLocationText.innerText = dataObj.location;

  const btn = document.createElement("button");
  btn.classList.add("shows__button");
  btn.innerText = "BUY TICKETS";

  showsContainer.appendChild(showsItem);

  showsItem.appendChild(showsDate);
  showsItem.appendChild(showsVenueText);
  showsItem.appendChild(showsLocationText);
  showsItem.appendChild(btn);
};

const render = (data) => {
  const showsContainer = document.querySelector(".section");
  showsContainer.innerHTML = "";

  if (window.innerWidth > 767) {
    const header = document.createElement("div");
    header.classList.add("section__header");
    showsContainer.appendChild(header);

    const headerShow = document.createElement("h");
    headerShow.classList.add("section__header--item");
    headerShow.innerText = "DATE";
    header.appendChild(headerShow);

    const headerVenue = document.createElement("h");
    headerVenue.classList.add("section__header--item");
    headerVenue.innerText = "VENUE";
    header.appendChild(headerVenue);

    const headerLocation = document.createElement("h");
    headerLocation.classList.add("section__header--item");
    headerLocation.innerText = "LOCATION";
    header.appendChild(headerLocation);

    const headerButton = document.createElement("h");
    headerButton.classList.add("section__header--item");
    headerButton.innerText = " ";
    header.appendChild(headerButton);
  }
  for (let i = 0; i < data.length; i++) {
    if (window.innerWidth <= 767) {
      showsSection(data[i], showsContainer);
    } else {
      showsSectionLarge(data[i], showsContainer);
    }
  }
};

window.addEventListener("resize", function (event) {
  getShows();
});
