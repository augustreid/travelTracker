class Destination {
  constructor(place) {
    this.id = place.id;
    this.destination = place.destination;
    this.lodgingPerDay = place.estimatedLodgingCostPerDay;
    this.flightPerPerson = place.estimatedFlightCostPerPerson;
    this.image = place.image;
    this.alt = place.alt;
  }
}


export default Destination;
