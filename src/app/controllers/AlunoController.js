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

  async store(req, res) {
    const { email } = req.body;

    const usuarioExiste = await Usuario.findOne({ where: { email } });

    console.log(usuarioExiste);

    if (usuarioExiste) res.json({ user: usuarioExiste.nome });
  }
}

export default new AlunoController();
