class DataRepo {
  constructor(dataSet) {
    this.dataSet = dataSet;
  }
  
  findElementById(id) {
    return this.dataSet.find((element) => {
      return element.id === id;
    })
  }
}


export default DataRepo;
