import Provas from '../models/Provas';

class ProvasController {
  async index(req, res) {
    const usuario_id = req.usuarioId;

    const provas = await Provas.findOne({
      where: { usuario_id, finalizada: false },
    });

    return res.json(provas);
  }

  async finalizadas(req, res) {
    const usuario_id = req.usuarioId;

    const provas = await Provas.findAll({
      where: { usuario_id, finalizada: true },
      order: ['id'],
    });

    return res.json(provas);
  }

  async create(req, res) {
    const usuario_id = req.usuarioId;

    const ultimaProva = await Provas.findOne({
      where: { usuario_id: usuario_id, finalizada: false },
    });

    if (ultimaProva) {
      return res.json({
        erro: 'Finalize a última prova antes de iniciar a próxima.',
      });
    }

    const prova = await Provas.create({ usuario_id });

    return res.json(prova);
  }
}

export default new ProvasController();
