import Provas3 from '../models/Provas3';
import Usuario from '../models/Usuario';

class Provas3Controller {
  async index(req, res) {
    const usuario_id = req.usuarioId;

    const provas = await Provas3.findOne({
      where: { usuario_id, finalizada: false },
    });

    return res.json(provas);
  }

  async finalizadas(req, res) {
    const usuario_id = req.usuarioId;

    const provas = await Provas3.findAll({
      where: { usuario_id, finalizada: true },
      order: ['id'],
    });

    return res.json(provas);
  }

  async create(req, res) {
    const usuario_id = req.usuarioId;

    const prova = await Provas3.create({ usuario_id });

    return res.json(prova);
  }
}

export default new Provas3Controller();
