CREATE SCHEMA `food` DEFAULT CHARACTER SET utf8mb4 ;

CREATE TABLE `food`.`food` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `protein` DECIMAL(7,2) NULL DEFAULT NULL,
  `carbohydrate` DECIMAL(7,2) NULL DEFAULT NULL,
  `fat` DECIMAL(7,2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `food`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(120) NOT NULL,
  `passwordHash` VARCHAR(60) NULL DEFAULT NULL,
  `email` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `food`.`food_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `foodId` INT NOT NULL,
  `userId` INT NOT NULL,
  `datetime` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_food_user_1_idx` (`userId` ASC),
  INDEX `fk_food_food_idx` (`foodId` ASC),
  CONSTRAINT `fk_food_user`
    FOREIGN KEY (`userId`)
    REFERENCES `food`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_food_food`
    FOREIGN KEY (`foodId`)
    REFERENCES `food`.`food` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
