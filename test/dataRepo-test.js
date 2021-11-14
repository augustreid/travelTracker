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

    // it("should be able to return an array of a single user's data based on the user ID", function() {
    //
    // })


});
