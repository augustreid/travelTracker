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
    console.log(data);
    traveler = new Traveler(data);
    renderTravelerTrips();
  })
  const allTravelers = new DataRepo(sampleTravelers);
  const travelerInfo = allTravelers.findElementById(3);
}

const renderTravelerTrips = () => {
  fetch("http://localhost:3001/api/v1/trips")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let allTrips = new DataRepo(data.trips)
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
    displayDashboard();
  })
}


//display functions
const displayDashboard = () => {
  displayGreeting();
  displayTrips(past);
  displayTrips(future);
  displayTrips(pending);
  toggleTabs(event);
}

const displayGreeting = () => {
  console.log("traveler", traveler)
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


//query selectors
const greeting = document.querySelector("#greeting");
const past = document.querySelector("#pastTrips");
const future = document.querySelector("#futureTrips");
const pending = document.querySelector("#pendingTrips");
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
//event listeners
window.addEventListener("load", renderDashboard);
