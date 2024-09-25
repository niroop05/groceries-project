const locations = [
  {
    name: 'DMart',
    address: '128 High Street, Reading, RG9 1PS',
    rating: 3,
    facilities: ['Drinks', 'Grocery', 'Dairy'],
    coords: { lat: 51.4545, lng: -0.9690 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '9:00pm', closed: false },
      { days: 'Sunday', opening: '6:00am', closing: '10:00pm', closed: false }
    ],
    reviews: [
      { author: 'Simon Holmes', rating: 5, timestamp: '16 July 2013', reviewText: 'What a great place. I can\'t say enough good things about it.' },
      { author: 'Charlie Chaplin', rating: 3, timestamp: '16 June 2013', reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.' }
    ],
    gmail: 'dmart@example.com',
    phno: '0123456789'
  },
  {
    name: 'More',
    address: '135 High Street, Reading, RG6 1PS',
    rating: 4,
    facilities: ['Grocery & Staples', 'Daily Essentials'],
    coords: { lat: 51.4550, lng: -0.9700 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '9:00pm', closed: false },
      { days: 'Sunday', opening: '6:00am', closing: '10:00pm', closed: false }
    ],
    reviews: [
      { author: 'Simon Holmes', rating: 5, timestamp: '16 July 2013', reviewText: 'What a great place. I can\'t say enough good things about it.' },
      { author: 'Charlie Chaplin', rating: 3, timestamp: '16 June 2013', reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.' }
    ],
    gmail: 'more@example.com',
    phno: '0123456789'
  },
  {
    name: 'Ratnadeep',
    address: '125 High Street, Reading, RG1 1PS',
    rating: 2,
    facilities: ['Frozen Food', 'Grocery'],
    coords: { lat: 51.4560, lng: -0.9710 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '9:00pm', closed: false },
      { days: 'Sunday', opening: '6:00am', closing: '10:00pm', closed: false }
    ],
    reviews: [
      { author: 'Simon Holmes', rating: 5, timestamp: '16 July 2013', reviewText: 'What a great place. I can\'t say enough good things about it.' },
      { author: 'Charlie Chaplin', rating: 3, timestamp: '16 June 2013', reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.' }
    ],
    gmail: 'ratnadeep@example.com',
    phno: '0123456789'
  }
];

// Home List Route
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Yeager Groceries',
    pageHeader: {
      title: 'Yeager Groceries',
      strapline: 'Hunt your grocery needs!'
    },
    sidebar: "Searching for a grocery store with great facilities? Our Grocery Locator helps you find the best spots for all your grocery needs...",
    locations: locations
  });
};

// Location Info Route
const locationInfo = (req, res) => {
  const locationName = req.params.name.replace(/-/g, ' ');
  const location = locations.find(loc => loc.name.toLowerCase() === locationName.toLowerCase());

  if (!location) {
    return res.status(404).send('Location not found');
  }

  res.render('location-info', {
    title: location.name,
    pageHeader: { title: location.name },
    sidebar: {
      context: `${location.name} is part of Yeager Groceries because it offers a variety of products including grocery essentials.`,
      callToAction: `To Contact Us:\nGmail: ${location.gmail}\nPhone: ${location.phno}`
    },
    location: location
  });
};

// Add Review Page
const addReview = (req, res) => {
  res.render('location-review-form', {
    title: 'Add Review',
    pageHeader: { title: 'Add Your Review' }
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
