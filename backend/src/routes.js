import { Router } from 'express';

/* controllers */
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import FornecedorController from './app/controllers/FornecedorController';
import UsuarioController from './app/controllers/UsuarioController';
import ClienteController from './app/controllers/ClienteController';

/* middleware */
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/* sessions */
routes.post('/sessions', SessionController.store);

/* fornecedores */
routes.get('/fornecedor/all', FornecedorController.index);
routes.get('/fornecedor/:id', FornecedorController.indexOne);
routes.post('/fornecedor', FornecedorController.store);
routes.put('/fornecedor/:id', FornecedorController.update);
routes.delete('/fornecedor/:id', FornecedorController.destroy);

/* usuarios */
routes.get('/usuario/all', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.indexOne);
routes.post('/usuario', UsuarioController.store);
routes.put('/usuario/:id', UsuarioController.update);
routes.delete('/usuario/:id', UsuarioController.destroy);

/* clientes */
routes.get('/cliente/all', ClienteController.index);
// routes.get('/cliente/:id', ClienteController.indexOne);
routes.post('/cliente', ClienteController.store);
// routes.put('/cliente/:id', ClienteController.update);
// routes.delete('/cliente/:id', ClienteController.destroy);

/* users */
routes.post('/user', UserController.store);
routes.get('/users', UserController.index);

/* Todas as rotas que forem chamadas a partir daqui tem que ser autenticada */
// routes.use(authMiddleware);
routes.put('/user', UserController.update);

export default routes;
