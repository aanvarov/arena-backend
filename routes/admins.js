const express = require('express');
const router = express.Router();

const controllers = require('../controllers/admin')

router.get('/', controllers.fetchAllAdmins);
router.post('/', controllers.createAdmin);
router.get('/:id', controllers.fetchAdminById);