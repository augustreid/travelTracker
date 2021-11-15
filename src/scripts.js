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

const renderDashboard = () => {
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


//display functions
const displayDashboard = () => {
  displayGreeting();
  displayTrips("past");
}

const displayGreeting = () => {
  const firstName = traveler.getFirstName();
  greeting.innerText = `Welcome back, ${firstName}!`;
}

const displayTrips = (time) => {
  const oldTrips = userTrips[time].forEach((trip) => {
    const vacation = new SingleTrip(trip)
    pastTrips.innerHTML += `<section class="trip-card">
      <h3> ${vacation.destination} </h3>
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
      </table>
    </section>`
  })
}


//query selectors
const greeting = document.querySelector("#greeting");
const pastTrips = document.querySelector("#pastTrips");
const futureTrips = document.querySelector("#futureTrips");


//event listeners
window.addEventListener("load", renderDashboard);
