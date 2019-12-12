const Sequelize = require('sequelize');

const sequelize = new Sequelize('lemonloft', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
.authenticate()
.then(() => {
  console.log('Connected');
})
.catch((err) => {
  console.log('Unable to connect');
})
.done();

var Activity = sequelize.define('activities', {
  'id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'title': {
    type: Sequelize.STRING(300)
  },
  'image_url': {
    type: Sequelize.STRING(300)
  },
  'cost': {
    type: Sequelize.INTEGER
  },
  'rating': {
    type: Sequelize.FLOAT
  },
  'num_comments': {
    type: Sequelize.INTEGER
  },
  'location': {
    type: Sequelize.STRING(100)
  }
}, {
    timestamps: false
});

// var Location = sequelize.define('locations', {
//   'id': {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   'location': {
//     type: Sequelize.STRING(100)
//   }
// }, {
//   timestamps: false
// });

// var Image = sequelize.define('images', {
//   'id': {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   'url': {
//     type: Sequelize.STRING(300)
//   }
// }, {
//   timestamps: false
// });

var Listing = sequelize.define('listings', {
  'id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'title': {
    type: Sequelize.STRING(300)
  },
  'main_image_url': {
    type: Sequelize.STRING(300)
  },
  // 'image': {
  //   type: Sequelize.INTEGER
  // },
  'cost': {
    type: Sequelize.INTEGER
  },
  'rating': {
    type: Sequelize.FLOAT
  },
  'num_comments': {
    type: Sequelize.INTEGER
  },
  'location': {
    type: Sequelize.STRING(100)
  },
  'room_type': {
    type: Sequelize.STRING(100)
  }
}, {
  timestamps: false
});

module.exports = {
  sequelize,
  Activity,
  Listing
  // Image
}