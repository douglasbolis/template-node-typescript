import * as ControllerUser from "../controllers/userController";

var express = require('express')
var router = express.Router()

const UserController: ControllerUser.UserController = new ControllerUser.UserController()

/* GET todos os usuários. */
router.get('/findall', UserController.findAll)

/* GET usuário com o id. */
router.get('/find/:id', UserController.find)

/* POST cria novo usuário. */
router.post('/create', UserController.create)

/* PUT atualiza o usuario. */
router.put('/update', UserController.update)

/* DELETE deleta o usuario com o id. */
router.delete('/delete/:id', UserController.delete)

module.exports = router
