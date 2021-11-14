class Trips {
  constructor(userTrips) {
    this.allTrips = userTrips;
  }

  findTripById(id) {
    return this.allTrips.find((trip) => {
      return trip.id === id;
    })
  }
}


export default Trips;
