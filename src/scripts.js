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
import {
  sampleTravelers,
  samplePlaces,
  sampleTrips
} from "../src/dummyData.js";

// const greeting = document.querySelector("#greeting");

let traveler;
let allTrips;
let userTrips;
let destinations;
// let location;

const renderDashboard = () => {
  renderTravelerData();
}

//render functions
const renderTravelerData = () => {
  const userID = 7;
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
      </table>
      <div class=photo>
      <img src=${image} alt=${altText}>
      </div>
    </section>`
  })
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
  .then(console.log(allTrips))
  }
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
//event listeners
window.addEventListener("load", renderDashboard);
submitButton.addEventListener("click", submitTripRequest);
