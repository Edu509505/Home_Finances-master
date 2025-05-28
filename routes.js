import { Router } from 'express'

import UsersController from './controllers/UsersController.js'
import PostsController from './controllers/PostsController.js'

const router = Router()

router.post('/users', UsersController.createUser)
router.get('/users', UsersController.getUsers)

router.post('/movimentacao', PostsController.createMovimentacao)
router.get('/movimentacao', PostsController.getMovimentacao)
router.get('/movimentacao/:id', PostsController.getMovimentacaoById)
router.delete('/movimentacao/:id', PostsController.deleteMovimentacao)
router.put('/movimentacao/:id', PostsController.updateMovimentacao)

router.get('/users/:userId/movimentacao', PostsController.getMovimentacaoByUserId)

router.get('/somadosvalores', PostsController.getMovimentacaoSoma)

export default router