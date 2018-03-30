const router = require('express').Router();
const teamRoutes = require('./team');
const gameRoutes = require('./game');
const scheduleRoutes = require('./schedule');
const authRoutes = require('./auth');

// mlb schedule routes
router.use('/teams', teamRoutes);
router.use('/game', gameRoutes);
router.use('/schedule', scheduleRoutes);
router.use('/auth', authRoutes);

module.exports = router;