import * as Yup from 'yup';

import Chamados from '../models/Chamados';
import Usuario from '../models/Usuario';

// import ContatoMail from '../jobs/ContatoMail';
// import Queue from '../../lib/Queue';

class ChamadosController {
  async store(req, res) {
    const usuario_id = req.usuarioId;

    const { assunto, mensagem } = req.body;

    const chamado = await Chamados.create({
      usuario_id,
      assunto,
      mensagem,
    });

    return res.json(chamado);
  }

  async index(req, res) {
    const usuario_id = req.usuarioId;

    const chamados = await Chamados.findAll({
      where: { usuario_id },
      order: [['id', 'DESC']],
    });

    return res.json(chamados);
  }

  async indexAdmin(req, res) {
    const chamados = await Chamados.findAll({
      order: [['id', 'DESC']],
      include: [
        {
          model: Usuario,
          as: 'admin',
          attributes: ['nome'],
        },
      ],
    });

    return res.json(chamados);
  }

  async detail(req, res) {
    const id = req.params.id;

    const chamado = await Chamados.findByPk(id);

    return res.json(chamado);
  }

  async update(req, res) {
    const { id } = req.body;

    const registro = await Chamados.findByPk(id);

    await registro.update({ concluido: true });

    return res.json(registro);
  }

  async deleteAluno(req, res) {
    const chamados = await Chamados.destroy({ where: { usuario_id: req.params.usuario_id } });

    return res.json(chamados);
  }
}

export default new ChamadosController();
