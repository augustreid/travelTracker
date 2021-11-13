import { expect } from 'chai';
import Traveler from '../src/Traveler.js';
import {
  sampleTravelers
} from "../src/dummyData.js";

describe('Traveler', () => {
  let travelerInfo;
  let traveler;

  beforeEach(function() {
    travelerInfo = sampleTravelers[0];
    traveler = new Traveler(travelerInfo);
  });

  it("should be a function", function() {
    expect(Traveler).to.be.a("function");
  });

  it("should be an instance of User", function() {
    expect(traveler).to.be.an.instanceOf(Traveler);
  })
});
