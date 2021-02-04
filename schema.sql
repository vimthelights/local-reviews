-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Reviews'
--
-- ---

CREATE TABLE IF NOT EXISTS Reviews (
  id SERIAL PRIMARY KEY,
  type VARCHAR(20) NULL DEFAULT NULL,
  posted DATE NULL DEFAULT NULL,
  message VARCHAR NULL DEFAULT NULL,
  liked SMALLINT NULL DEFAULT NULL,
  id_Users INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'Listings'
--
-- ---


CREATE TABLE IF NOT EXISTS Listings (
  id SERIAL PRIMARY KEY,
  id_Reviews INTEGER NULL DEFAULT NULL,
  id_Features INTEGER NULL DEFAULT NULL
);

-- ---
-- Table 'Users'
--
-- ---


CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NULL DEFAULT NULL,
  thumbnail VARCHAR NULL DEFAULT NULL,
  resident bit NULL DEFAULT NULL
);

-- ---
-- Table 'Features'
--
-- ---


CREATE TABLE IF NOT EXISTS Features (
  id SERIAL PRIMARY KEY,
  name VARCHAR NULL DEFAULT NULL,
  totalVotes SMALLINT NULL DEFAULT NULL
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE Reviews ADD FOREIGN KEY (id_Users) REFERENCES Users (id);
ALTER TABLE Listings ADD FOREIGN KEY (id_Reviews) REFERENCES Reviews (id);
ALTER TABLE Listings ADD FOREIGN KEY (id_Features) REFERENCES Features (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Listings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Reviews` (`id`,`type`,`posted`,`message`,`liked`,`id_Users`) VALUES
-- ('','','','','','');
-- INSERT INTO `Listings` (`id`,`id_Reviews`,`id_Features`) VALUES
-- ('','','');
-- INSERT INTO `Users` (`id`,`username`,`thumbnail`,`resident`) VALUES
-- ('','','','');
-- INSERT INTO `Features` (`id`,`name`,`totalVotes`) VALUES
-- ('','','');