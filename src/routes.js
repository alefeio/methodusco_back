import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
import SessionController from './app/controllers/SessionController';
import AlunoController from './app/controllers/AlunoController';
import NiveisController from './app/controllers/NiveisController';
import AdminController from './app/controllers/AdminController';
import TestesController from './app/controllers/TestesController';
import ProvasController from './app/controllers/ProvasController';
import ProvasalunoController from './app/controllers/ProvasalunoController';
import ChamadosController from './app/controllers/ChamadosController';
import RespostaschamadosController from './app/controllers/RespostaschamadosController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.post('/sessions', SessionController.store);
routes.get('/alunos', AlunoController.index);

routes.get('/', (req, res) =>
  res.send('Methodus Leitura Dinâmica e Memorização')
);

routes.use(authMiddleware);

routes.put('/usuarios', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

routes.get('/admins', AdminController.index);

routes.get('/niveis', NiveisController.index);
routes.post('/niveis', NiveisController.store);
routes.put('/niveis/:id', NiveisController.update);
routes.delete('/niveis/:id', NiveisController.delete);

routes.get('/testes', TestesController.index);
routes.put('/teste', TestesController.detail);
routes.put('/testealuno/:id', TestesController.testeAluno);
routes.post('/testes', TestesController.store);
routes.put('/testes/:id', TestesController.update);
routes.delete('/testes/:id', TestesController.delete);

routes.get('/provas', ProvasController.index);
routes.get('/provasfinalizadas', ProvasController.finalizadas);
routes.post('/provas', ProvasController.create);

routes.get('/provasaluno', ProvasalunoController.index);
routes.post('/provasaluno', ProvasalunoController.store);
routes.post('/provasaluno/:id', ProvasalunoController.update);
routes.delete('/provasaluno/:id', ProvasalunoController.delete);

routes.post('/chamados', ChamadosController.store);
routes.get('/chamados', ChamadosController.index);
routes.get('/chamadosadmin', ChamadosController.indexAdmin);
routes.get('/chamados/:id', ChamadosController.detail);
routes.put('/chamados', ChamadosController.update);

routes.post('/respostaschamados', RespostaschamadosController.store);
routes.put('/respostaschamados', RespostaschamadosController.index);
routes.put('/marcarlido', RespostaschamadosController.update);

export default routes;
