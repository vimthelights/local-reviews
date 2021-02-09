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
  id_listing INTEGER,
  FOREIGN KEY (id_listing) REFERENCES listings (listing_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
  review_id SERIAL PRIMARY KEY,
  category CHAR(20),
  created_at TIMESTAMP,
  message_body TEXT,
  likes SMALLINT,
  id_users INTEGER,
  id_listing INTEGER,
  FOREIGN KEY (id_users) REFERENCES users (user_id) ON DELETE CASCADE,
  FOREIGN KEY (id_listing) REFERENCES listings (listing_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS listing_reviews (
  id_listing INTEGER,
  id_review INTEGER,
  FOREIGN KEY (id_listing) REFERENCES listings (listing_id) ON DELETE CASCADE,
  FOREIGN KEY (id_review) REFERENCES reviews (review_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS listing_features (
  id_listing INTEGER,
  id_feature INTEGER,
  FOREIGN KEY (id_listing) REFERENCES listings (listing_id) ON DELETE CASCADE,
  FOREIGN KEY (id_feature) REFERENCES features (feature_id) ON DELETE CASCADE
);

COPY users(password_, username, thumbnail_url, neighborhood_resident, email, home_address, city, zip, state_, country) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/csv/users.csv' DELIMITER ',';
COPY listings(home_address, city, zip, state_, country) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/csv/listings.csv' DELIMITER ',';
COPY reviews(category, created_at, message_body, likes, id_Users, id_Listing) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/csv/reviews.csv' DELIMITER ',';
COPY listing_reviews(id_listing, id_review) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/csv/listingReviews.csv' DELIMITER ',';
COPY features(feature_type, total_votes, id_listing) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/csv/features.csv' DELIMITER ',';
COPY listing_features(id_listing, id_feature) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/csv/listingFeatures.csv' DELIMITER ',';

