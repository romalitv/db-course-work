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
            res.send(`scrapeInstance with id: ${id} was deleted`);
        })
    })

module.exports = router;