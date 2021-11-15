class SingleTrip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.activities = trip.suggestedActivities;
  }

  formatDate() {
    const day = new Date(this.date);
    console.log(day.toDateString());
    return day.toDateString();
  }
}


export default SingleTrip;
