import {
  expect
} from 'chai';
import DataRepo from '../src/DataRepo.js';
import {
  samplePlaces
  sampleTrips
} from "../src/dummyData.js";

describe('DataRepo', () => {
  let destinations;
  let trips;
  let dataset;

  beforeEach(function() {
    destinations = samplePlaces;
    trips = sampleTrips;
    destinationRepo = new DataRepo(samplePlaces);
    tripRepo = new DataRepo(sampleTrips);
  });
