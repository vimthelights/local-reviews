const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

// 1000000 users
// 10000000 reviews
// 400000 listings
// 6400000 features

const writeUserCSV = fs.createWriteStream('csv/users.csv');
const encoding = 'utf8';
const userCap = 1000000;
for (let i = 0; i < userCap; i += 1) {
  let userValues = [];
  userValues.push(faker.internet.password());
  userValues.push(faker.internet.userName());
  userValues.push('https://remy-sdc-images.s3-us-west-2.amazonaws.com/7122_27632012632_c8ab26fd55_q_100_100_nofilter.webp');
  userValues.push(faker.random.boolean());
  userValues.push(faker.internet.email());
  userValues.push(faker.address.streetAddress());
  userValues.push(faker.address.city());
  userValues.push(faker.address.zipCode());
  userValues.push(faker.address.stateAbbr());
  userValues.push('United States');
  let csvRow = userValues.join(',') + '\n';
  if (i === userCap - 1) {
    writeUserCSV.write(csvRow, encoding, () => writeUserCSV.end());
  } else {
    writeUserCSV.write(csvRow, encoding);
  }
}

const categories = ['community', 'dogOwners', 'parents', 'commute'];
let now = moment();
now = now.subtract(3, 'M');
const writeReviewCSV = fs.createWriteStream('csv/reviews.csv');
for (let i = 0; i < userCap * 10; i += 1) {
  let reviewValues = [];
  reviewValues.push(categories[faker.random.number(3)]);
  reviewValues.push(now.toISOString());
  now.add(Math.floor(Math.random() * 4), 's');
  reviewValues.push(faker.lorem.sentences(faker.random.number(4) + 1));
  reviewValues.push(faker.random.number(100) + 1);
  reviewValues.push(faker.random.number(599999) + 1);
  reviewValues.push(faker.random.number(239999) + 1);
  let csvRow = reviewValues.join(',') + '\n';
  if (i === (userCap * 10) - 1) {
    writeReviewCSV.write(csvRow, encoding, () => writeReviewCSV.end());
  } else {
    writeReviewCSV.write(csvRow, encoding);
  }
}

const featureCap = userCap * 10 / 25 * 16;
const featureNames = ['dog', 'sidewalk', 'restaurant', 'cart', 'moon', 'streetlight', 'play', 'holiday', 'neighbors', 'quiet', 'hourglass', 'parking', 'car', 'wildlife', 'yarn', 'events'];
const writeFeatureCSV = fs.createWriteStream('csv/features.csv');
let featureCount = 0;
for (let i = 0; i < featureCap; i += 1) {
  let featureValues = [];
  featureValues.push(featureNames[featureCount]);
  featureValues.push(faker.random.number(129) + 1);
  featureValues.push(Math.floor(i/16) + 1);
  let csvRow = featureValues.join(',') + '\n';
  if (i === featureCap - 1) {
    writeFeatureCSV.write(csvRow, encoding, () => writeFeatureCSV.end());
  } else {
    writeFeatureCSV.write(csvRow, encoding);
  }
  featureCount++;
  if (featureCount === 15) {
    featureCount = 0;
  }

}

const listingCap = userCap * 10 / 25;
const writeListingCSV = fs.createWriteStream('csv/listings.csv');
for (let i = 0; i < listingCap; i += 1) {
  let listingValues = [];
  listingValues.push(faker.address.streetAddress());
  listingValues.push(faker.address.city());
  listingValues.push(faker.address.zipCode());
  listingValues.push(faker.address.stateAbbr());
  listingValues.push('United States');
  let csvRow = listingValues.join(',') + '\n';
  if (i === listingCap - 1) {
    writeListingCSV.write(csvRow, encoding, () => writeListingCSV.end());
  } else {
    writeListingCSV.write(csvRow, encoding);
  }
}
