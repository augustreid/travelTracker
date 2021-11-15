class Destination {
  constructor(place) {
    this.id = place.id;
    this.destination = place.destination;
    this.lodgingPerDay = place.estimatedLodgingCostPerDay;
    this.flightPerPerson = place.estimatedFlightCostPerPerson;
    this.image = place.image;
    this.alt = place.alt;
  }

  returnPlaceName() {
    return this.destination;
  }

  calculateLodging(numDays) {
    const lodgingTotal = this.lodgingPerDay * numDays;
    return lodgingTotal;
  }

  calculateFlights(numPeople) {
    const flightsTotal = this.flightPerPerson * numPeople;
    return flightsTotal;
  }

  calculateTotalCost(days, people) {
    const totalCost = Math.round((this.calculateLodging(days) + this.calculateFlights(people)) * 1.1);
    return totalCost;
  }
}


export default Destination;
