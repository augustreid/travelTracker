import {
  expect
} from 'chai';
import Trips from '../src/Trips.js';
import DataRepo from "../src/DataRepo.js";
import SingleTrip from "../src/SingleTrip.js";
import {
  sampleTrips
} from "../src/dummyData.js";

describe('SingleTrip', () => {
  let user2Data;
  let allUserTrips;
  let user2Trips;
  let oneTrip;
  let trip;

  beforeEach(function() {
    allUserTrips = new DataRepo(sampleTrips)
    user2Data = allUserTrips.findTravelerData(2);
    user2Trips = new Trips(user2Data);
    oneTrip = user2Trips.findTripById(89);
    trip = new SingleTrip(oneTrip);
  });

  it("should be a function", function() {
    expect(SingleTrip).to.be.a("function");
  });

  it("should be an instance of SingleTrip", function() {
    expect(trip).to.be.an.instanceOf(SingleTrip);
  })

})
