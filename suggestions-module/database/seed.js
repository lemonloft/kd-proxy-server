const faker = require('faker');
const { Activity, Listing } = require('./index.js');

const activityVerbs = ['Experience', 'Experience', 'Expand your travels with', 'Enjoy', 'Discover', 'Embrace', 'Savor', 'Delight in', 'Try'];
const activityThings = ['a photoshoot in', 'a tour of', 'a walking tour in', 'an art show in', 'cuisine extraordinaire in', 'a nature tour in', 'a flight around'];

const seedActivity = () => {
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
  
>>>>>>> master
  for (let i = 0; i <= 100; i++) {
    let activity = {};

    let location = faker.address.city();
<<<<<<< HEAD
    let image_url = `https://loremflickr.com/320/240/travel/all?random`;
=======
  
  for (let i = 0; i < 100; i++) {
    let activity = {};

    let location = faker.address.city();
    let image_url = `https://lemonloft.s3-us-west-1.amazonaws.com/ex/ex_100`;
    let suffix = '0';
>>>>>>> Stashed changes
=======
    let image_url = `https://lemonloft.s3-us-west-1.amazonaws.com/ex/ia_100`;
    let suffix = '0';
>>>>>>> master
    let verb = activityVerbs[Math.floor(Math.random() * activityVerbs.length)];
    let thing = activityThings[Math.floor(Math.random() * activityThings.length)];
    let title = `${verb} ${thing} ${location}`;
    let rating = null;
    let num_comments = null;

    if (i % 3 === 0) {
      rating = 5;
    } else {
      rating = Math.floor(Math.random() * (500 - 400) + 400) / 100;
    };

    if (i % 3 === 0) {
      num_comments = Math.ceil((Math.random() * (1000 - 90) + 90));
    } else {
      num_comments = Math.ceil((Math.random() * (100 - 1) + 1));
    };

    if (i < 10) {
      suffix += i.toString();
    } else {
      suffix = i.toString();
    }

    activity.id = i;
    activity.title = title;
    activity.image_url = `${image_url}${suffix}.jpg`;
    activity.cost = Math.ceil((Math.random() * (150 - 51) + 50));
    activity.rating = rating;
    activity.num_comments = num_comments;
    activity.location = location;

    Activity.sync({ force: true })
    .then(() => {
      return Activity.create(activity)
    })
    .catch((err) => {
      console.log(`Err is ${err}`); 
    });
  }
}

seedActivity();

const listingAdjs = ['Luxury', 'Magical', 'Classical', 'Romantic', 'Off-Grid', 'Modern', 'Private', 'Cozy'];
const listingTypes = [
  ['Loft', 'Entire loft'],
  ['Studio', 'Entire apartment'],
  ['Studio', 'Private room'],
  ['Villa', 'Entire villa'],
  ['Apartment', 'Entire apartment'],
  ['Apartment', 'Private room'],
  ['Garden Room', 'Entire room'],
  ['Cottage', 'Entire cottage'],
  ['Palace', 'Entire guest suite'],
  ['Flat', 'Private room'],
  ['Flat', 'Entire flat'],
  ['Bungalow', 'Entire bungalow'],
  ['Suite', 'Entire hotel room']
];
const listingDescs = ['in the heart of', 'in the center of', 'in', 'in', 'in', 'close to', 'with views of', 'with amazing views of', 'among olive trees in', 'with garden in'];
<<<<<<< HEAD
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
=======
const imageRooms = ['bedtheme', 'livingroom'];  

>>>>>>> master
const seedListing = () => {
  for (let i = 0; i < 100; i++) {

    let listing = {};
    let location = faker.address.city();
<<<<<<< HEAD
<<<<<<< Updated upstream
    let main_image_url = `https://loremflickr.com/320/240/luxury,property/all?random`;
=======
    let main_image_url = `https://lemonloft.s3-us-west-1.amazonaws.com/li/li_100`;
    let suffix = '0';
>>>>>>> Stashed changes
=======
    let room = imageRooms[Math.floor(Math.random() * imageRooms.length)];
    let main_image_url = `https://lemonloft.s3-us-west-1.amazonaws.com/${room}/ia_100`;
    let suffix = '0';
>>>>>>> master
    let adj = listingAdjs[Math.floor(Math.random() * listingAdjs.length)];
    let type = listingTypes[Math.floor(Math.random() * listingTypes.length)];
    let desc = listingDescs[Math.floor(Math.random() * listingDescs.length)];
    let title = `${adj} ${type[0]} ${desc} ${location}`
    let rating = null;
    let num_comments = null;

    if (i % 3 === 0) {
      rating = 5;
    } else {
      rating = Math.floor(Math.random() * (500 - 400) + 400) / 100;
    };

    if (i % 3 === 0) {
      num_comments = Math.ceil((Math.random() * (1000 - 90) + 90));
    } else {
      num_comments = Math.ceil((Math.random() * (100 - 1) + 1));
    };

    if (i < 10) {
      suffix += i.toString();
    } else {
      suffix = i.toString();
    }

    listing.id = i;
    listing.title = title;
    listing.main_image_url = `${main_image_url}${suffix}.jpg`;
    // listing.image = faker.image.imageUrl();
    listing.cost = Math.ceil((Math.random() * (400 - 70) + 70))
    listing.rating = rating;
    listing.num_comments = num_comments;
    listing.location = location;
    // listing.location_id = location_id;
    listing.room_type = type[1];

    Listing.sync({ force: true })
    .then(() => {
      return Listing.create(listing);
    })
    .catch((err) => {
      console.log(`Error is ${err}`);
    });
  }
};

seedListing();