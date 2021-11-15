class Trips {
  constructor(userTrips) {
    this.allTrips = userTrips;
    this.pending = [];
    this.approved = [];
    this.past = [];
    this.future = [];
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

  sortTripsByDate() {
    let makeDate = new Date();
    const today = makeDate.getFullYear() + '/' + (makeDate.getMonth() + 1) + '/' + makeDate.getDate();
    this.allTrips.forEach((trip) => {
      if (trip.date > today) {
        this.future.push(trip);
      } else {
        this.past.push(trip);
      }
    })
  }
}


export default Trips;
