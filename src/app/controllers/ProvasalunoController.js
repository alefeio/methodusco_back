import Provas from '../models/Provas';

class ProvasalunoController {
  async store(req, res) {
    if (req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

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

  async index(req, res) {
    if (req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const provas = await Provas.findAll({
      where: { usuario_id: req.usuarioId },
      attributes: ['id', 'finalizada'],
    });

    return res.json(provas);
  }

  async update(req, res) {
    const registro = await Provas.findByPk(req.params.id);

    await registro.update(req.body);

    return res.json(registro);
  }

  async delete(req, res) {
    // if (req.usuarioAdmin) {
    //   return res
    //     .status(401)
    //     .json({ erro: 'Operação não autorizada para admin!' });
    // }

    const prova = await Provas.findByPk(req.params.id);

    const provas = await Provas.destroy({ where: { usuario_id: req.params.usuario_id } });

    if (!prova) {
      return res.status(400).json({ erro: 'A prova não existe!' });
    }

    if (prova.usuario_id !== req.usuarioId) {
      return res.json({ erro: 'Operação não autorizada!' });
    }

    if (prova.finalizada) {
      return res.status(400).json({ erro: 'A prova já está finalizada!' });
    }

    prova.finalizada = true;

    prova.save();

    return res.json(prova);
  }

  async deleteAluno(req, res) {
    const provas = await Provas.destroy({ where: { usuario_id: req.params.usuario_id } });

    return res.json(provas);
  }
}

export default new ProvasalunoController();
