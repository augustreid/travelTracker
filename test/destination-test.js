import {
  expect
} from 'chai';
import Destination from '../src/Destination.js';
import {
  samplePlaces
  } from "../src/dummyData.js";

describe('Destination', () => {
  let destinationInfo;
  let destination;

  beforeEach(function() {
    destinationInfo = samplePlaces[0];
    destination = new Destination(destinationInfo);
  });

  it("should be a function", function() {
    expect(Destination).to.be.a("function");
  });

  it("should be an instance of Destination", function() {
    expect(destination).to.be.an.instanceOf(Destination);
  })

});
