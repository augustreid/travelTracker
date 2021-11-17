// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import MicroModal from "micromodal";
import Trips from '../src/Trips.js';
import DataRepo from "../src/DataRepo.js";
import SingleTrip from "../src/SingleTrip.js";
import Traveler from "../src/Traveler.js";
import Destination from "../src/Destination.js";


// const greeting = document.querySelector("#greeting");

let traveler;
let allTrips;
let userTrips;
let destinations;
let requestForm;

const onSubmit = () => {
  event.preventDefault();
  let usernameInput = username.value;
  let passwordInput = password.value;
  let userId;
  if (usernameInput.includes("traveler")) {
    userId = usernameInput.split("traveler")[1]
  }
  if (passwordInput === "travel" && userId) {
    //hide input form
    loginPage.classList.add("hidden");
    mainBody.classList.remove("hidden");
    //show main body
    //communicate userID to first fetch for user
  } else {
    alert("try again")
  }
}

const renderDashboard = () => {
  renderTravelerData();
}

//render functions
const renderTravelerData = () => {
  const userID = 9;
  fetch(`http://localhost:3001/api/v1/travelers/${userID}`)
  .then(response => response.json())
  .then(data => {
    traveler = new Traveler(data);
    renderTravelerTrips();
  })
}

const renderTravelerTrips = () => {
  fetch("http://localhost:3001/api/v1/trips")
  .then(response => response.json())
  .then(data => {
    allTrips = new DataRepo(data.trips);
    const travelerTrips = allTrips.findTravelerData(traveler.id);
    userTrips = new Trips(travelerTrips);
    userTrips.sortTripsByDate();
    userTrips.sortTripsByStatus();
    renderDestinations();
  })
}

const renderDestinations = () => {
  fetch("http://localhost:3001/api/v1/destinations")
  .then(response => response.json())
  .then(data => {
    destinations = new DataRepo(data.destinations);
    displayTripOptions();
    displayDashboard();
  })
}


//display functions
const displayDashboard = () => {
  displayGreeting();
  displayTrips(past);
  displayTrips(future);
  displayTrips(pending);
  toggleTabs();
  makeModal();
  displayYearTotal();
}

const displayGreeting = () => {
  const firstName = traveler.getFirstName();
  greeting.innerText = `Welcome back, ${firstName}!`;
}

const displayTrips = (section) => {
  const sectionType = getDisplaySection(section);
  userTrips[sectionType].forEach((trip) => {
    let vacation = new SingleTrip(trip);
    vacation.formatDate();
    let place = getDestinationInfo(trip.destinationID);
    let placeName = place.returnPlaceName();
    let tripCost = place.calculateTotalCost(trip.duration, trip.travelers)
    let image = place.image;
    let altText = place.alt;
    section.innerHTML += `<section class="trip-card">
      <h3> ${placeName} </h3>
      <table>
        <tr>
          <th> Date: </th>
          <td> ${vacation.date} </td>
        </tr>
        <tr>
          <th> Days: </th>
          <td> ${vacation.duration} </td>
        </tr>
        <tr>
          <th> Crew: </th>
          <td> ${vacation.travelers} </td>
        </tr>
        <tr>
          <th> Budget: </th>
          <td> $${tripCost} </td>
        </tr>
        <tr>
          <th> Status: </th>
          <td> ${vacation.status} </td>
        </tr>
      </table>
      <div class=photo>
      <img src=${image} alt=${altText}>
      </div>
    </section>`
  })
}

const displayYearTotal = () => {
  const yearTotal = calculateYearTotal();
  spentThisYear.innerHTML = `You spent too much, dumbass: $${yearTotal}`
}

const calculateYearTotal = () => {
  const yearTrips = getTripsThisYear();
  const yearTotal = yearTrips.reduce((sum, currentTrip) => {
    let location = getDestinationInfo(currentTrip.destinationID);
    let tripPrice = location.calculateTotalCost(currentTrip.duration, currentTrip.travelers)
    sum += tripPrice;
    return sum;
  }, 0)
  return yearTotal;
}

const getTripsThisYear = () => {
  userTrips.sortTripsByStatus();
  const startDate = new Date("2021/01/01");
  const endDate = new Date("2021/12/31");
  const thisYear = userTrips.approved.filter((trip) => {
    return startDate < new Date(trip.date) && new Date(trip.date) < endDate
  })
  return thisYear;
}


const getDisplaySection = (status) => {
  let section;
  if (status === pending) {
    section = "pending";
  } else if (status === past) {
    section = "past";
  } else if (status === future) {
    section = "future";
  }
  return section;
}

const getDestinationInfo = (id) => {
  const place = destinations.findElementById(id);
  const location = new Destination(place);
  return location
}

const toggleTabs = () => {
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      var target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(tabContent => {
        tabContent.classList.remove("active");
      })
      target.classList.add("active");
    })
  })
};

const makeModal = () => {
  MicroModal.show("modal-1")
}

const displayTripOptions = () => {
  const alphabetized = destinations.dataSet.sort((a, b) => {
    return a.destination.localeCompare(b.destination);
  })
  alphabetized.forEach((place) => {
    tripOptions.innerHTML += `
    <option value=${place.id}>-- ${place.destination} --</option>`
  })
}

const submitTripRequest = () => {
  event.preventDefault();
  if (checkValidity()) {
    fetch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      body: JSON.stringify(
        {
          id: Number(allTrips.dataSet.length + 1),
          userID: Number(traveler.id),
          destinationID: Number(tripOptions.value),
          travelers: Number(partySize.value),
          date: pickDate.value.split("-").join("/"),
          duration: Number(tripLength.value),
          status: "pending",
          suggestedActivities: []
        }),
      headers: {
  	     'Content-Type': 'application/json'
       }
     })
  .then(response => response.json())
  .then(pending.innerHTML = "")
  .then(resetForm())
  .then(renderDashboard())
  .then(MicroModal.close("modal-1"))
  }
}

const resetForm = () => {
  tripOptions.value = "";
  pickDate.value = "";
  tripLength.value = "";
  partySize.value = "";
  price.innerText = "$0.00";
}


const displayEstimate = () => {
  if (checkValidity()) {
    const estimate = calculatePrice();
    price.innerText = `$${estimate}`;
  }
}

const calculatePrice = () => {
    const localeID = Number(tripOptions.value);
    const days = Number(tripLength.value);
    const people = Number(partySize.value);
    const locale = destinations.findElementById(localeID);
    const coolSpot = new Destination(locale);
    const tripPrice = coolSpot.calculateTotalCost(days, people)
    return tripPrice;
}

const checkValidity = () => {
  if (tripOptions.value && pickDate.value && tripLength.value && partySize.value) {
    return true;
  }
}
//query selectors
const greeting = document.querySelector("#greeting");
const past = document.querySelector("#pastTrips");
const future = document.querySelector("#futureTrips");
const pending = document.querySelector("#pendingTrips");
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const tripOptions = document.querySelector("#tripOptions");
const pickDate = document.querySelector("#pickDate");
const tripLength = document.querySelector("#tripLength");
const partySize = document.querySelector("#partySize");
const price = document.querySelector("#price");
const cancelButton = document.querySelector("#cancelButton");
const submitButton = document.querySelector("#submitButton");
const tripForm = document.querySelector("#tripForm");
const modal = document.querySelector("#modal-1")
const spentThisYear = document.querySelector("#spentThisYear");
const loginPage = document.querySelector("#loginPage");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
const welcomeMessage = document.querySelector("#welcome");
const mainBody = document.querySelector("#mainBody");

//event listeners
window.addEventListener("load", renderDashboard);
submitButton.addEventListener("click", submitTripRequest);
cancelButton.addEventListener("click", resetForm);
tripForm.addEventListener("click", displayEstimate);
loginButton.addEventListener("click", onSubmit);
