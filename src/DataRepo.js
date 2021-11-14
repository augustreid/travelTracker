class DataRepo {
  constructor(dataSet) {
    this.dataSet = dataSet;
  }

  findElementById(id) {
    return this.dataSet.find((element) => {
      return element.id === id;
    })
  }

  findTravelerData(travelerID) {
    return this.dataSet.filter((element) => {
      return element.userID === travelerID;
    })
  }
}


export default DataRepo;
