# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:
## SQL-скрипт для створення та початкового наповнення бази даних
```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;
-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`source` ;
CREATE TABLE IF NOT EXISTS `mydb`.`source` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NOT NULL,
  `key` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`scraper`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraper` ;
CREATE TABLE IF NOT EXISTS `mydb`.`scraper` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`task` ;
CREATE TABLE IF NOT EXISTS `mydb`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `state` TEXT NOT NULL,
  `schedule` TEXT NOT NULL,
  `source_id` INT NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_source1_idx` (`source_id` ASC) VISIBLE,
  INDEX `fk_task_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;
CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;
CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_access_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`scrapeInstance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scrapeInstance` ;
CREATE TABLE IF NOT EXISTS `mydb`.`scrapeInstance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` TEXT NOT NULL,
  `flag` VARCHAR(45) NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_scrapeInstance_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_scrapeInstance_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;
CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `task_id` INT NOT NULL,
  `scrapeInstance_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_result_scrapeInstance1_idx` (`scrapeInstance_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_scrapeInstance1`
    FOREIGN KEY (`scrapeInstance_id`)
    REFERENCES `mydb`.`scrapeInstance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`message` ;
CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `result_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_message_result1_idx` (`result_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_result1`
    FOREIGN KEY (`result_id`)
    REFERENCES `mydb`.`result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`metadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`metadata` ;
CREATE TABLE IF NOT EXISTS `mydb`.`metadata` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` INT NOT NULL,
  `value` TEXT NOT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,
  CONSTRAINT `fk_metadata_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `mydb`.`message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## RESTfull сервіс для управління даними

### Файл конфігурації serv.js

```
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./scraperInstance');
const sql_pool = require('./sql_pool');

const app = express();
const port = 8080;
sql_pool.connect();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/db', router);

app.listen(8080, () => {
    console.log(`Server starts on http://localhost:${port}`);
});
```

### Файл конфігурації запуску на localhost serv.js

```
'use strict';

const mysql = require('mysql2');

const connectionOptions = {
    host: "localhost",
    user: "root",
    password: "18IsaIa*98p",
    database: "mydb",
};

const sql_pool = mysql.createConnection(connectionOptions);

module.exports = sql_pool;
```

### Головний файл роботи на node.js scraperInsatance.js

```
'use strict';

const { Router } = require('express');
const sql_pool = require('./sql_pool');

const router = Router();

router.get('/scrapeInstance', (req, res) => {
    const showAllScraperInstance = 'SELECT * FROM scrapeInstance';
    sql_pool.query(showAllScraperInstance, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error on server! Try again.'
            });
        }
        res.send(result)
    })
})

router.post('/scrapeInstance', (req, res) => {
        return res.status(403).json({ message: 'Cannot get query to POST on /scrapeInstance/.'
        })
    })

router.put('/scrapeInstance', (req, res) => {
        return res.status(403).json({ message: 'Cannot get query to PUT on /scrapeInstance/.'
        })
    })

router.delete('/scrapeInstance', (req, res) => {
        return res.status(403).json({ message: 'Cannot get query to DELETE on /scrapeInstance/.'
        })
    })

router.get('/scrapeInstance/:id', (req, res) => {
        const showScraperInstanceByID = 'SELECT * FROM scrapeInstance WHERE id = ?';
        const id = req.params.id;

        sql_pool.query(showScraperInstanceByID, id, (err, [result]) => {
            if (err) {
                return res.status(500).json({ message: 'Error on server! Try again.'
                });
            }
            if (!result) {
                return res.status(404).json({ message: 'No query of scrapeInstance with this id!'
                });
            }
            res.send(result)
        })
    })

router.post('/scrapeInstance/:id', (req, res) => {
        const { data, flag, scraper_id } = req.body;
        if (!(data && flag && scraper_id)) {
            res.status(400).json({ message: 'All fields must be filled!'
            });
            return ;
        }
        const createScraperInstanceQuery = 'INSERT INTO scrapeInstance(id, data, flag, scraper_id) VALUES (?, ?, ?, ?)'
        const id = req.params.id;

        sql_pool.query(createScraperInstanceQuery, [ id, data, flag, scraper_id], (err) => {
            if (err) {
                return res.status(500).json({ message: 'Server error! Check logs. ',
            });
            }
            res.send(`Query of scrapeInstance with id: ${id} was created!`)
        })
    })

router.put('/scrapeInstance/:id', (req, res) => {
        const  { data, flag } = req.body;
        const updateScraperInstanceQuery = 'UPDATE scrapeInstance SET data = ?, flag = ?  WHERE id = ?';
        const id = req.params.id;
        const sqlStatement = sql_pool.format(updateScraperInstanceQuery, [data, flag, id]);

        sql_pool.execute(sqlStatement, (err, result) => {
            if (err || !result.affectedRows) {
                return res.status(500).json({ message: 'Error on server or incorrect input of id!'
                });
            }
            res.send(result);
        })
    })

router.delete('/scrapeInstance/:id', (req, res) => {
        const deleteScrapeInstance = 'DELETE FROM scrapeInstance WHERE id = ?'
        const id = req.params.id;

        sql_pool.query(deleteScrapeInstance, id, (err, result) => {
            if (err || !result.affectedRows) {
                return res.status(500).json({ message: 'Error on server or incorrect input of id!'
                });
            }
            res.send(`Task with id: ${id} was deleted`);
        })
    })

module.exports = router;
```