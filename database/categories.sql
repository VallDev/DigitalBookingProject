-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_prod_grupo9
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_prod_grupo9
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_prod_grupo9` DEFAULT CHARACTER SET utf8 ;
USE `db_prod_grupo9` ;

-- -----------------------------------------------------
-- Table `db_prod_grupo9`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod_grupo9`.`categories` (
  `id` INT NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `urlimg` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
