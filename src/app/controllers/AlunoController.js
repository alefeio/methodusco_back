import Usuario from '../models/Usuario';

class AlunoController {
  async index(req, res) {
    const usuarios = await Usuario.findAll({
      where: { admin: false },
      attributes: ['id', 'nome', 'email', 'updated_at'],
      order: [['updated_at', 'desc']],
    });

    return res.json(usuarios);
  }
}

export default new AlunoController();
