import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não precisa escrever a ação na rota. O método HTTP já diz o que é.
router.post('/', userController.create);      // POST em /users => Cria usuário
router.get('/', userController.index);        // GET em /users => Lista todos

router.get('/:id', userController.show);      // GET em /users/1 => Mostra um usuário
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/*
Os métodos mais utilizados pelo mercado:

index => listar algo, nesse caso usuarios => GET
store/create => cria um item, nesse caso, novo usuario => POST
delete => deleta um item => DELETE
show => mostra somente um item => GET
update => atualiza um item => PATCH ou PUSH
*/
