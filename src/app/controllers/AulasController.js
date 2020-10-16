import Aulas from '../models/Aulas';

class AulasController {
  async store(req, res) {
    const usuario_id = req.usuarioId;

    const { id } = await Aulas.create({
      numero,
      plm,
      pcr,
      pcm,
      horas,
      nivel_id,
      prova_id,
      usuario_id,
    });

    return res.json({
      id,
      numero,
      plm,
      pcr,
      pcm,
      horas,
      nivel_id,
      prova_id,
      usuario_id,
    });
  }

  async index(req, res) {
    const registros = await Aulas.findAll({
      attributes: ['id', 'numero', 'plm', 'pcr', 'pcm', 'horas'],
      include: [
        {
          model: Niveis,
          as: 'nivel',
          attributes: ['nome'],
        },
      ],
    });

    return res.json(registros);
  }

  async update(req, res) {
    const { numero, plm, pcr, pcm, horas, nivel_id } = req.body;

    const registro = await Aulas.findByPk(req.params.id);

    const { id } = await registro.update(req.body);

    return res.json({
      id,
      numero,
      plm,
      pcr,
      pcm,
      horas,
      nivel_id,
    });
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const registroExiste = await Aulas.findByPk(req.params.id);

    if (registroExiste) {
      await Aulas.destroy({ where: { id: registroExiste.id } });

      return res.json({ msg: 'Operação realizada com sucesso!' });
    }

    return res.json();
  }
}

export default new AulasController();
