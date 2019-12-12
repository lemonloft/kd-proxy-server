DROP DATABASE IF EXISTS suggestions;

CREATE DATABASE suggestions;

USE suggestions;

-- CREATE TABLE `images` (
--   `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `url` VARCHAR(300)
-- )

DROP TABLE IF EXISTS `activities`;
CREATE TABLE `activities` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(300),
  `image_url` VARCHAR(300),
  `cost` INT,
  `rating` FLOAT,
  `num_comments` INT,
  `location` VARCHAR(100)
  -- `location_id` INT
  -- FOREIGN KEY (location_id) REFERENCES locations (id) ON DELETE CASCADE
)

DROP TABLE IF EXISTS `listings`;
CREATE TABLE `listings` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(300),
  `main_image_url` VARCHAR(300),
  -- `image` INT,
  `cost` INT,
  `rating` FLOAT,
  `num_comments` INT,
  -- `location_id` INT,
  `location` VARCHAR(100),
  `room_type` VARCHAR(100)
  -- FOREIGN KEY (image) REFERENCES images (id),
  -- FOREIGN KEY (location_id) REFERENCES locations (id) ON DELETE CASCADE
)

-- DROP TABLE IF EXISTS `locations`;
-- CREATE TABLE `locations` (
--   `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `location` VARCHAR(100)
-- )