const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json('users array');
});

router.post('/register', (req, res) => {
    if (req.body.username === undefined ||
        req.body.password === undefined ||
        !req.body.username ||
        !req.body.password) {
            res.status(400).json({
                message: 'username and password are required'
            });
        } else {
            res.status(201).json({
                message: `welome ${req.body.username} thanks for joining`
            });
        }
});

router.post('/login', (req, res) => {
    if (req.body.username === undefined ||
        req.body.password === undefined ||
        !req.body.username ||
        !req.body.password) {
            res.status(400).json({
                message: 'username and password are required'
            });
        } else {
            res.json({message: `welcome back ${req.body.username}!`});
        }
});

module.exports = router;