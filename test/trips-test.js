import {
  expect
} from 'chai';
import Trips from '../src/Trips.js';
import DataRepo from "../src/DataRepo.js";
import {
  sampleTrips
  } from "../src/dummyData.js";

describe('Trips', () => {
  let user2Data;
  let user3Data;
  let allUserTrips;
  let user2Trips;
  let user3Trips;

  beforeEach(function() {
    allUserTrips = new DataRepo(sampleTrips)
    user2Data = allUserTrips.findTravelerData(2);
    user3Data = allUserTrips.findTravelerData(3);
    user2Trips = new Trips(user2Data);
    user3Trips = new Trips(user3Data);
  });

  it("should be a function", function() {
    expect(Trips).to.be.a("function");
  });

  it("should be an instance of Trips", function() {
    expect(user2Trips).to.be.an.instanceOf(Trips);
  });

  it("should have an array of all trips for a single user", function() {
    expect(user2Trips.allTrips).to.deep.equal(user2Data);
  });

  it("should be able to return a single trip with a give id", function() {
    const result1 = user2Trips.findTripById(100);
    expect(result1).to.deep.equal({
      "id": 100,
      "userID": 2,
      "destinationID": 6,
      "travelers": 6,
      "date": "2020/3/28",
      "duration": 10,
      "status": "approved",
      "suggestedActivities": []
    })
  });

  it("should be able to filter and store trips with pending status", function() {
    user3Trips.sortTripsByStatus();
    expect(user3Trips.pending).to.deep.equal(
      [
        {
        "id": 3,
        "userID": 3,
        "destinationID": 22,
        "travelers": 4,
        "date": "2022/05/22",
        "duration": 17,
        "status": "pending",
        "suggestedActivities": []
      }
    ])
  })

  it("should be able to filter and store trips with approved status", function() {
    user3Trips.sortTripsByStatus();
    expect(user3Trips.approved).to.deep.equal(
      [
        {
        "id": 41,
        "userID": 3,
        "destinationID": 25,
        "travelers": 3,
        "date": "2020/08/30",
        "duration": 11,
        "status": "approved",
        "suggestedActivities": []
      }, {
        "id": 50,
        "userID": 3,
        "destinationID": 16,
        "travelers": 5,
        "date": "2020/07/02",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
      },{
        "id": 65,
        "userID": 3,
        "destinationID": 35,
        "travelers": 4,
        "date": "2020/03/21",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": []
      }]
    )
  })

})
