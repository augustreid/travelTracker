// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
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
  renderDestinations();
  renderTravelerData();
  renderTravelerTrips();
  displayDashboard();
}

//render functions
const renderTravelerData = () => {
  const allTravelers = new DataRepo(sampleTravelers);
  const travelerInfo = allTravelers.findElementById(3);
  traveler = new Traveler(travelerInfo);
}

const renderTravelerTrips = () => {
  const allTrips = new DataRepo(sampleTrips);
  const travelerTrips = allTrips.findTravelerData(traveler.id);
  userTrips = new Trips(travelerTrips);
  userTrips.sortTripsByDate();
}

const renderDestinations = () => {
  destinations = new DataRepo(samplePlaces);
}


//display functions
const displayDashboard = () => {
  displayGreeting();
  displayTrips(past);
  displayTrips(future);
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
  if (status === past) {
    section = "past";
  } else if (status === future) {
    section = "future";
  } else if (status === pending) {
    section = "pending";
  }
  return section;
}



const getDestinationInfo = (id) => {
  const place = destinations.findElementById(id);
  const location = new Destination(place);
  return location
}

const toggleTabs = () => {
  event.preventDefault();
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
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
//event listeners
window.addEventListener("load", renderDashboard);
