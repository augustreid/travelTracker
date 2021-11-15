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
  });

  it("should have an id", function() {
    expect(trip.id).to.equal(89);
  });

  it("should have a userID for the associated traveler", function() {
    expect(trip.userID).to.equal(2);
  });

  it("should have a destinationID", function() {
    expect(trip.destinationID).to.equal(10);
  });

  it("should have a number of travelers on the trip", function() {
    expect(trip.travelers).to.equal(5);
  });

  it("should have a date", function() {
    expect(trip.date).to.equal("2019/09/27");
  });

  it("should have a duration that is a number of days", function() {
    expect(trip.duration).to.equal(13);
  });

  it("should have a status of approved or pending", function() {
    expect(trip.status).to.equal("approved");
  });

  it("should be able to store suggested activities", function() {
    expect(trip.activities).to.deep.equal([]);
  });

  it("should be able to return the date in readable format", function() {
    const result = trip.formatDate();
    expect(result).to.equal("Fri Sep 27 2019")
  })
})
