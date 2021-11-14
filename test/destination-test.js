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

  it("should have an id that is a number", function() {
    expect(destination.id).to.equal(6);
  })

  it("should have a destination", function() {
    expect(destination.destination).to.equal("Jakarta, Indonesia");
  })

  it("should have an estimated lodging cost per day", function() {
    expect(destination.lodgingPerDay).to.equal(70);
  });

  it("should have an estimated flight cost per person", function() {
    expect(destination.flightPerPerson).to.equal(890);
  })

  it("should have an image URL", function() {
    expect(destination.image).to.equal("https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  })

  it("should have alt text for the image", function() {
    expect(destination.alt).to.equal("lit up city at night");
  })

});
