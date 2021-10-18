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
import CategoriaController from './app/controllers/CategoriaController';
import ModuloController from './app/controllers/ModuloController';
import TipoController from './app/controllers/TipoController';
import ExercicioController from './app/controllers/ExercicioController';
import ExerciciosporcategoriaController from './app/controllers/ExercicioporcategoriaController';
import RespostaController from './app/controllers/RespostaController';
import Provas2sController from './app/controllers/Provas2sController';
import ProvaalunoController from './app/controllers/ProvaalunoController';
import VideoController from './app/controllers/VideoController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/usuarios', UsuarioController.store);
routes.post('/sessions', SessionController.store);
routes.get('/alunos', AlunoController.index);
routes.get('/ident/:email', AlunoController.identidade);

routes.get('/', (req, res) => res.send('Methodus Cursos Online'));

routes.use(authMiddleware);

routes.put('/usuarios', UsuarioController.update);
routes.put('/usuariosdel/:id', UsuarioController.delete);

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
routes.put('/provasaluno/:id', ProvasalunoController.update);
routes.delete('/provasaluno/:id', ProvasalunoController.delete);

routes.post('/chamados', ChamadosController.store);
routes.get('/chamados', ChamadosController.index);
routes.get('/chamadosadmin', ChamadosController.indexAdmin);
routes.get('/chamadosadminfiltro/:usuario_id', ChamadosController.indexAdminFiltro);
routes.get('/chamados/:id', ChamadosController.detail);
routes.put('/chamados', ChamadosController.update);

routes.post('/respostaschamados', RespostaschamadosController.store);
routes.put('/respostaschamados', RespostaschamadosController.index);
routes.put('/marcarlido', RespostaschamadosController.update);

routes.get('/categorias', CategoriaController.index);
routes.post('/categorias', CategoriaController.store);
routes.put('/categorias/:id', CategoriaController.update);
routes.delete('/categorias/:id', CategoriaController.delete);

routes.get('/modulos', ModuloController.index);
routes.post('/modulos', ModuloController.store);
routes.put('/modulos/:id', ModuloController.update);
routes.delete('/modulos/:id', ModuloController.delete);

routes.get('/tipos', TipoController.index);
routes.post('/tipos', TipoController.store);
routes.put('/tipos/:id', TipoController.update);
routes.delete('/tipos/:id', TipoController.delete);

routes.post('/videos', VideoController.store);
routes.get('/videos', VideoController.index);
routes.get('/videos/:urlvideo', VideoController.detail);
routes.put('/videos/:id', VideoController.update);
routes.delete('/videos/:id', VideoController.delete);

routes.get('/exercicios', ExercicioController.index);
routes.get('/exercicios/:id', ExercicioController.detail);
routes.post('/exercicios', ExercicioController.store);
routes.put('/exercicios/:id', ExercicioController.update);
routes.delete('/exercicios/:id', ExercicioController.delete);

routes.get('/exerciciosporcategoria', ExerciciosporcategoriaController.index);

routes.get('/resposta', RespostaController.index);
routes.get('/respostaid', RespostaController.detail);
routes.get('/respostaprova', RespostaController.respostasProva);
routes.post('/resposta', RespostaController.store);
routes.put('/resposta/:id', RespostaController.update);

routes.get('/provas2/:id', Provas2sController.index);
routes.get('/provas2finalizadas/:id', Provas2sController.finalizadas);
routes.post('/provas2/:id', Provas2sController.create);

routes.get('/provas2aluno', ProvaalunoController.index);
routes.post('/provas2aluno', ProvaalunoController.store);
routes.put('/provas2aluno/:id', ProvaalunoController.update);
routes.delete('/provas2aluno/:id', ProvaalunoController.delete);

export default routes;
