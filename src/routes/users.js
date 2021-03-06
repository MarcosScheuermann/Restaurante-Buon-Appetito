const {Router} = require('express');
const { getUsers, addUser, deleteUser, getUsersByName, getYoungUsers, getUserById, updateUser, login } = require('../controllers/users');
const { checkUser } = require('../middlewares/auth');
const {check} = require('express-validator')

const router = Router();

router.get('/', getUsers);

router.get('/nombre', getUsersByName);

router.get('/jovenes', getYoungUsers);

router.get('/:id', getUserById);

router.post('/', addUser);

router.delete('/', deleteUser);

router.put('/:id', updateUser);

router.post('/login', login);

module.exports = router
