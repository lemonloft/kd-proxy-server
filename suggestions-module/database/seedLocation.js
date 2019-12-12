// const faker = require('faker');

// const seedLocation = () => {
//   for (let i = 0; i <= 10; i++) {
//     let location = {};

//     location.id = i;
//     location.location = faker.address.city();
//     // { location } = faker.address.city();

//     Location.sync( { force: true } )
//     .then(() => {
//       return Location.create(location);
      
//     })
//     .catch((err) => {
//       console.log(`Err is ${err}`);
//     });
    
//   }
// }

// var seedLocation = () => {
//   let locations = {};
//   let location;
  
//   for (var i = 0; i <= 100; i++) {

//     if (i === 0) {
//       location = faker.address.city();
//       locations[i] === location;
//     } else if (i !== 0 && i < 10) {
//       locations[i] = locations[i - 1];
//     } else if (i % 10 === 0) {
//       location = faker.address.city();
//       locations[i] = location;
//     } else {
//       locations[i] = locations[i - 1];
//     }
//   }

//   return locations;
// }

// seedLocation();