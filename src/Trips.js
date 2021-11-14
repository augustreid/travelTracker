class Trips {
  constructor(userTrips) {
    this.allTrips = userTrips;
    this.pending = [];
    this.approved = [];
  }

  findTripById(id) {
    return this.allTrips.find((trip) => {
      return trip.id === id;
    })
  }

  sortTripsByStatus() {
    return this.allTrips.forEach((trip) => {
      this[trip.status].push(trip);
    })
  }


}


export default Trips;
