import Usuario from '../models/Usuario';

class AlunoController {
  async index(req, res) {
    const usuarios = await Usuario.findAll({
      where: { admin: false },
      order: [['id', 'DESC']],
      attributes: ['id', 'nome', 'email', 'updated_at'],
    });

    return res.json(usuarios);
  }
}

export default new AlunoController();
