import Provas2s from '../models/Provas2s';
import Usuario from '../models/Usuario';

class Provas2sController {
  async index(req, res) {
    const usuario_id = req.usuarioId;

    const provas = await Provas2s.findOne({
      where: { usuario_id, finalizada: false },
    });

    return res.json(provas);
  }

  async finalizadas(req, res) {
    const usuario_id = req.usuarioId;

    const provas = await Provas2s.findAll({
      where: { usuario_id, finalizada: true },
      order: ['id'],
    });

    return res.json(provas);
  }

  async create(req, res) {
    const usuario_id = req.usuarioId;

    const ultimaProva = await Provas2s.findOne({
      where: { usuario_id: usuario_id, finalizada: false },
    });

    if (ultimaProva) {
      return res.json({
        erro: 'Finalize a última prova antes de iniciar a próxima.',
      });
    }

    const prova = await Provas2s.create({ usuario_id });

    return res.json(prova);
  }
}

export default new Provas2sController();
