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

  async update(req, res) {
    const { email } = req.params;

    const usuario = await Usuario.findOne({
      where: { email },
      attributes: ['id', 'nome', 'email'],
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não cadastrado.' });
    }

    return res.json(usuario);
  }
}

export default new AlunoController();
