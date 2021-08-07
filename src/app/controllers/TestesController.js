import Testes from '../models/Testes';
import Niveis from '../models/Niveis';
import Provas from '../models/Provas';

class TestesController {
  async store(req, res) {
    const { numero, plm, pcr, pcm, horas, nivel_id, prova_id } = req.body;

    const registroExiste = await Testes.findOne({
      where: { numero, nivel_id, prova_id },
    });

    if (registroExiste) {
      return res.status(400).json({ erro: 'Registro já existe!' });
    }

    const provaExiste = await Provas.findByPk(prova_id);

    if (!provaExiste) {
      return res.status(400).json({ erro: 'A prova não existe!' });
    }

    const usuario_id = req.usuarioId;

    const { id } = await Testes.create({
      numero,
      plm,
      pcr,
      pcm,
      horas,
      finalizado: true,
      nivel_id,
      prova_id,
      usuario_id,
    });

    if (numero === 0) {
      provaExiste.avaliacao = true;
    }
    if (numero === 5) {
      provaExiste.aula09 = true;
    }
    if (numero === 10) {
      provaExiste.aula11 = true;
    }
    if (numero === 15) {
      provaExiste.aula13 = true;
    }
    if (numero === 20) {
      provaExiste.aula15 = true;
    }

    await provaExiste.update({
      avaliacao: provaExiste.avaliacao,
      aula09: provaExiste.aula09,
      aula11: provaExiste.aula11,
      aula13: provaExiste.aula13,
      aula15: provaExiste.aula15,
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
    const registros = await Testes.findAll({
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

  async testeAluno(req, res) {
    const prova_id = req.params.id;

    const registros = await Testes.findAll({
      where: { prova_id },
      order: ['numero'],
      attributes: ['id', 'numero', 'plm', 'pcr', 'pcm', 'horas'],
      include: [
        {
          model: Niveis,
          as: 'nivel',
          attributes: ['nome'],
        },
        {
          model: Provas,
          as: 'prova',
          attributes: ['id'],
        },
      ],
    });

    return res.json(registros);
  }

  async detail(req, res) {
    const { numero, prova_id } = req.body;

    const registro = await Testes.findOne({
      where: { numero, prova_id },
    });

    return res.json(registro);
  }

  async update(req, res) {
    const registro = await Testes.findByPk(req.params.id);

    await registro.update(req.body);

    return res.json(registro);
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const registroExiste = await Testes.findByPk(req.params.id);

    if (registroExiste) {
      await Testes.destroy({ where: { id: registroExiste.id } });

      return res.json({ msg: 'Operação realizada com sucesso!' });
    }

    return res.json();
  }
}

export default new TestesController();
