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

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

const traveler;
const userTrips;

const renderDashboard = () => {
  renderTravelerData();
  renderTravelerTrips();
}

const renderTravelerData = () => {
  const allTravelers = new DataRepo(sampleTravelers);
  const travelerInfo = allTravelers.findElementById(3);
  traveler = new Traveler(travelerInfo);
}

const renderTravelerTrips = () => {
  const allTrips = new DataRepo(sampleTrips);
  const travelerTrips = allTrips.findTravelerData(traveler.id);
  userTrips = new Trips(travelerTrips);
}
