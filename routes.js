import { Router } from "express";

import UsersController from "./controllers/UsersController.js";
import PostsController from "./controllers/PostsController.js";
import LoginController from "./controllers/LoginController.js";
import authenticate from "./middlewares/authenticate.js";

const router = Router();

router.post("/users", authenticate, UsersController.createUser);
router.get("/users", authenticate,UsersController.getUsers);

router.post("/movimentacao", authenticate, PostsController.createMovimentacao);
router.get("/movimentacao", authenticate, PostsController.getMovimentacao);
router.get("/movimentacao/:id", authenticate, PostsController.getMovimentacaoById);
router.delete("/movimentacao/:id", authenticate, PostsController.deleteMovimentacao);
router.put("/movimentacao/:id", authenticate, PostsController.updateMovimentacao);

router.get("/users/:userId/movimentacao", authenticate,PostsController.getMovimentacaoByUserId);

router.get("/somadosvalores", authenticate, PostsController.getMovimentacaoSoma);

//ROTAS LOGIN

router.post("/login", LoginController.login);

export default router;
