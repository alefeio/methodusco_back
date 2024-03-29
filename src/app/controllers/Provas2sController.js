import Provas2s from '../models/Provas2s';
import Usuario from '../models/Usuario';

class Provas2sController {
  async index(req, res) {
    const usuario_id = req.usuarioId;

    const aula = req.params.id;

    const provas = await Provas2s.findOne({
      where: { usuario_id, finalizada: false, aula },
    });

    return res.json(provas);
  }

  async finalizadas(req, res) {
    const usuario_id = req.usuarioId;

    const aula = req.params.id;

    const provas = await Provas2s.findAll({
      where: { usuario_id, finalizada: true, aula },
      // order: [['id', 'desc']],
    });

    return res.json(provas);
  }

  async create(req, res) {
    const usuario_id = req.usuarioId;

    const aula = req.params.id;

    const ultimaProva = await Provas2s.findOne({
      where: { usuario_id: usuario_id, finalizada: false, aula },
    });

    if (ultimaProva) {
      return res.json({
        erro: 'Finalize a última prova antes de iniciar a próxima.',
      });
    }

    const prova = await Provas2s.create({ usuario_id, aula });

    return res.json(prova);
  }
}

export default new Provas2sController();
