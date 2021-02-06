CREATE TABLE IF NOT EXISTS Users (
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

CREATE TABLE IF NOT EXISTS Listings (
  listing_id SERIAL PRIMARY KEY,
  home_address CHAR(40),
  city CHAR(50),
  zip CHAR(10),
  state_ CHAR(2),
  country CHAR(50)
);

CREATE TABLE IF NOT EXISTS Features (
  feature_id SERIAL PRIMARY KEY,
  feature_type CHAR(15),
  total_votes SMALLINT,
  id_listing INTEGER,
  FOREIGN KEY (id_listing) REFERENCES Listings (listing_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Reviews (
  review_id SERIAL PRIMARY KEY,
  category CHAR(20),
  created_at TIMESTAMP,
  message_body TEXT,
  likes SMALLINT,
  id_Users INTEGER,
  id_Listing INTEGER,
  FOREIGN KEY (id_Users) REFERENCES Users (user_id) ON DELETE CASCADE,
  FOREIGN KEY (id_listing) REFERENCES Listings (listing_id) ON DELETE CASCADE
);

COPY USERS(password_, username, thumbnail_url, neighborhood_resident, email, home_address, city, zip, state_, country) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/users.csv' DELIMITER ',';
COPY LISTINGS(home_address, city, zip, state_, country) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/listings.csv' DELIMITER ',';
COPY REVIEWS(category, created_at, message_body, likes, id_Users, id_Listing) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/reviews.csv' DELIMITER ',';
COPY FEATURES(feature_type, total_votes, id_Listing) FROM '/Users/remyorans/hackreactor/sdc/Local-Review/features.csv' DELIMITER ',';
