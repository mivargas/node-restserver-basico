const { Router } = require('express');
const Users = require('../controllers/users');
const users = new Users();

const router = Router();

router.get('/', users.usersGet());

router.put('/:id', users.usersPut());

router.post('/', users.usersPost());

router.delete('/', users.usersDelete());

router.patch('/', users.usersPatch());





module.exports = router;