import * as Yup from 'yup';
import Usuario from '../models/Usuario';
import Aulas from '../models/Aulas';
import Chamados from '../models/Chamados';
import Provas from '../models/Provas';
import Respostaschamados from '../models/Respostaschamados';
import Testes from '../models/Testes';

class UsuarioController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().email().required(),
      admin: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Falha na validação!' });
    }

    const { nome, email, password, admin } = req.body;

    const usuarioExiste = await Usuario.findOne({ where: { email, ativo: true } });

    if (usuarioExiste) {
      return res.status(400).json({ erro: 'Usuário já existe!' });
    }

    const { id } = await Usuario.create({
      nome,
      email,
      password,
      admin,
    });

    return res.json({
      id,
      nome,
      email,
      admin,
    });
  }
  async integrationHotmart(req, res) {

    const response = req.body;

    return response;

    const { nome, email, password, admin } = req.body;

    const usuarioExiste = await Usuario.findOne({ where: { email, ativo: true } });

    if (usuarioExiste) {
      return res.status(400).json({ erro: 'Usuário já existe!' });
    }

    const { id } = await Usuario.create({
      nome,
      email,
      password,
      admin,
    });

    return res.json({
      id,
      nome,
      email,
      admin,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        // .when('oldPassword', (oldPassword, field) =>
        //   oldPassword ? field.required() : field
        // )
        ,
      // confirmPassword: Yup.string().when('password', (password, field) =>
      //   password ? field.required().oneOf([Yup.ref('password')]) : field
      // ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Falha na validação!' });
    }

    const { email, oldPassword, usuarioid } = req.body;

    const usuario = await Usuario.findByPk(req.params.id);

    if (email && email !== usuario.email) {
      const usuarioExiste = await Usuario.findOne({ where: { email } });

      if (usuarioExiste) {
        return res.status(400).json({ erro: 'Usuário já existe!' });
      }
    }

    // if (oldPassword && !(await usuario.checarPassword(oldPassword))) {
    //   return res.status(401).json({ erro: 'Senha não confere!' });
    // }

    const { id, nome, admin } = await usuario.update(req.body);

    return res.json({
      id,
      nome,
      email,
      admin,
    });
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const usuarioExiste = await Usuario.findByPk(req.params.id);

    if (usuarioExiste) {
      // await Aulas.destroy({ where: { usuario_id: usuarioExiste.id } });
      // await Chamados.destroy({ where: { usuario_id: usuarioExiste.id } });
      // await Provas.destroy({ where: { usuario_id: usuarioExiste.id } });
      // await Respostaschamados.destroy({ where: { usuario_id: usuarioExiste.id } });
      // await Testes.destroy({ where: { usuario_id: usuarioExiste.id } });
      // await Usuario.destroy({ where: { id: usuarioExiste.id } });
      
      await usuarioExiste.update({ ativo: false });

      return res.json({ msg: 'Operação realizada com sucesso!' });
    }

    return res.json();
  }
}

export default new UsuarioController();
