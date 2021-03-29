CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  password_ CHAR(30),
  username CHAR(35),
  thumbnail_url CHAR(103),
  neighborhood_resident boolean,
  email CHAR(45),
  home_address CHAR(40),
  city CHAR(50),
  zip CHAR(10),
  state_ CHAR(2),
  country CHAR(50)
);

CREATE TABLE IF NOT EXISTS listings (
  listing_id SERIAL PRIMARY KEY,
  home_address CHAR(40),
  city CHAR(50),
  zip CHAR(10),
  state_ CHAR(2),
  country CHAR(50)
);

CREATE TABLE IF NOT EXISTS features (
  feature_id SERIAL PRIMARY KEY,
  feature_type CHAR(15),
  total_votes SMALLINT,
  id_listing INTEGER
);

CREATE TABLE IF NOT EXISTS reviews (
  review_id SERIAL PRIMARY KEY,
  category CHAR(20),
  created_at TIMESTAMP,
  message_body TEXT,
  likes SMALLINT,
  id_user INTEGER,
  id_listing INTEGER
);

COPY users(password_, username, thumbnail_url, neighborhood_resident, email, home_address, city, zip, state_, country) FROM './users.csv' DELIMITER ',';
COPY listings(home_address, city, zip, state_, country) FROM './listings.csv' DELIMITER ',';
COPY reviews(category, created_at, message_body, likes, id_user, id_Listing) FROM './reviews.csv' DELIMITER ',';
COPY features(feature_type, total_votes, id_listing) FROM './features.csv' DELIMITER ',';

ALTER TABLE features ADD CONSTRAINT listingfk_features FOREIGN KEY (id_listing) REFERENCES listings (listing_id) ON DELETE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT listingfk_reviews FOREIGN KEY (id_listing) REFERENCES listings (listing_id) ON DELETE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT userfk FOREIGN KEY (id_user) REFERENCES users (user_id) ON DELETE CASCADE;


CREATE INDEX ON reviews(id_listing);
CREATE INDEX ON reviews(id_user);
CREATE INDEX ON features(id_listing);
