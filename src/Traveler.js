class Traveler {
  constructor(travelerInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.type = travelerInfo.travelerType;
  }

  getFirstName() {
    return this.name.split(" ")[0];
  }
}

export default Traveler;
