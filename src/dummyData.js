const sampleTravelers = [
  {
    "id": 1,
    "name": "Ham Leadbeater",
    "travelerType": "relaxer",
  }, {
    "id": 2,
    "name": "Rachael Vaughten",
    "travelerType": "thrill-seeker",
  }, {
    "id": 3,
    "name": "Sibby Dawidowitsch",
    "travelerType": "shopper",
  }, {
    "id": 4,
    "name": "Leila Thebeaud",
    "travelerType": "photographer",
  }, {
    "id": 5,
    "name": "Tiffy Grout",
    "travelerType": "thrill-seeker",
  }];

  const sampleTrips = [
    {
    "id": 117,
    "userID": 1,
    "destinationID": 28,
    "travelers": 3,
    "date": "2021/01/09",
    "duration": 15,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 89,
    "userID": 2,
    "destinationID": 10,
    "travelers": 5,
    "date": "2019/09/27",
    "duration": 13,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 100,
    "userID": 2,
    "destinationID": 6,
    "travelers": 6,
    "date": "2020/3/28",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 116,
    "userID": 2,
    "destinationID": 7,
    "travelers": 3,
    "date": "2020/04/03",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
  }, {
    "id": 3,
    "userID": 3,
    "destinationID": 22,
    "travelers": 4,
    "date": "2022/05/22",
    "duration": 17,
    "status": "pending",
    "suggestedActivities": []
  }, {
    "id": 41,
    "userID": 3,
    "destinationID": 25,
    "travelers": 3,
    "date": "2020/08/30",
    "duration": 11,
    "status": "pending",
    "suggestedActivities": []
  }, {
    "id": 50,
    "userID": 3,
    "destinationID": 16,
    "travelers": 5,
    "date": "2020/07/02",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
  },{
    "id": 65,
    "userID": 3,
    "destinationID": 35,
    "travelers": 4,
    "date": "2020/03/21",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
  }];

  const samplePlaces = [
  {
  "id": 6,
  "destination": "Jakarta, Indonesia",
  "estimatedLodgingCostPerDay": 70,
  "estimatedFlightCostPerPerson": 890,
  "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "lit up city at night"
},
{
  "id": 7,
  "destination": "Paris, France",
  "estimatedLodgingCostPerDay": 100,
  "estimatedFlightCostPerPerson": 395,
  "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  "alt": "city during the day time with eiffel tower"
},
{
  "id": 10,
  "destination": "Toronto, Canada",
  "estimatedLodgingCostPerDay": 90,
  "estimatedFlightCostPerPerson": 450,
  "image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80",
},
{
  "id": 16,
  "destination": "Bangkok, Thailand",
  "estimatedLodgingCostPerDay": 35,
  "estimatedFlightCostPerPerson": 988,
  "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  "alt": "ornate buildings with a garden during the day"
},
{
  "id": 22,
  "destination": "Rome, Italy",
  "estimatedLodgingCostPerDay": 90,
  "estimatedFlightCostPerPerson": 650,
  "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "people standing inside a colosseum during the day"
},
{
  "id": 25,
  "destination": "New York, New York",
  "estimatedLodgingCostPerDay": 175,
  "estimatedFlightCostPerPerson": 200,
  "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
},
{
  "id": 28,
  "destination": "San Juan, Puerto Rico",
  "estimatedLodgingCostPerDay": 70,
  "estimatedFlightCostPerPerson": 900,
  "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
  "alt": "white and brown concrete buildings near sea under white clouds during daytime"
},
{
  "id": 35,
  "destination": "Anchorage, Alaska",
  "estimatedLodgingCostPerDay": 200,
  "estimatedFlightCostPerPerson": 100,
  "image": "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "man riding on kayak surrounded by mountains"
}];

export {
  sampleTravelers,
  sampleTrips,
  samplePlaces
};
