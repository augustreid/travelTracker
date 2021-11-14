import {
  expect
} from 'chai';
import DataRepo from '../src/DataRepo.js';
import {
  samplePlaces,
  sampleTrips
} from "../src/dummyData.js";

describe('DataRepo', () => {
  let destinations;
  let trips;
  let destinationRepo;
  let tripRepo;

  beforeEach(function() {
    destinations = samplePlaces;
    trips = sampleTrips;
    destinationRepo = new DataRepo(samplePlaces);
    tripRepo = new DataRepo(sampleTrips);
  });

    it("should be a function", function() {
      expect(DataRepo).to.be.a("function")
    });

    it("should be an instance of DataRepo", function() {
      expect(destinationRepo).to.be.an.instanceOf(DataRepo);
      expect(tripRepo).to.be.an.instanceOf(DataRepo);
    });

    it("should have a a data set that is an array of objects", function() {
      expect(destinationRepo.dataSet).to.deep.equal(samplePlaces);
      expect(tripRepo.dataSet).to.deep.equal(sampleTrips);
    })

    it("should be able to return an element based on the ID", function() {
      let result1 = destinationRepo.findElementById(10);
      let result2 = tripRepo.findElementById(89);
      expect(result1).to.deep.equal(samplePlaces[2]);
      expect(result2).to.deep.equal(sampleTrips[1]);
    })

    it("should be able to return an array of a single user's data based on the user ID", function() {
      let result3 = tripRepo.findTravelerData(1);
      let result4 = tripRepo.findTravelerData(2);
      expect(result3).to.deep.equal(
      [
        {
        "id": 117,
        "userID": 1,
        "destinationID": 28,
        "travelers": 3,
        "date": "2021/01/09",
        "duration": 15,
        "status": "approved",
        "suggestedActivities": []
      }
    ]
    );
      expect(result4).to.deep.equal(
        [
          {
          "id": 89,
          "userID": 2,
          "destinationID": 10,
          "travelers": 5,
          "date": "2019/09/27",
          "duration": 13,
          "status": "approved",
          "suggestedActivities": []
        }, {
          "id": 100,
          "userID": 2,
          "destinationID": 6,
          "travelers": 6,
          "date": "2020/3/28",
          "duration": 10,
          "status": "approved",
          "suggestedActivities": []
        }, {
          "id": 116,
          "userID": 2,
          "destinationID": 7,
          "travelers": 3,
          "date": "2020/04/03",
          "duration": 8,
          "status": "approved",
          "suggestedActivities": []
        }
      ]
    )
    })


});
