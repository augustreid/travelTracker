import {
  expect
} from 'chai';
import Trips from '../src/Trips.js';
import DataRepo from "../src/DataRepo.js";
import {
  sampleTrips
  } from "../src/dummyData.js";

describe('Trips', () => {
  let user2Trips;
  let user3Trips;
  let allUserTrips;

  beforeEach(function() {
    allUserTrips = new DataRepo(sampleTrips)
    user2Trips = allUserTrips.findTravelerData(2);
    user3Trips = allUserTrips.findTravelerData(3);
  });

  it("should be a function", function() {
    expect(Trips).to.be.a("function");
  });

  it("should be an instance of Trips", function() {
    expect(destination).to.be.an.instanceOf(Trips);
  });

  

})
