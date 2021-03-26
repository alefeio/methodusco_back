import Usuario from '../models/Usuario';

class AlunoController {
  async index(req, res) {
    const usuarios = await Usuario.findAll({
      where: { admin: false },
      order: [['updated_at', 'DESC']],
      attributes: ['id', 'nome', 'email', 'updated_at'],
    });

    return res.json(usuarios);
  }

  async identidade(req, res) {
    const email = req.params.email;

    const usuario = await Usuario.findOne({
      where: { email }
    });

    if (!usuario) {
      return res.status(400).json({ error: 'Usuário não cadastrado.' });
    }

    return res.status(200).json(usuario.data);
  }
}

export default new AlunoController();
