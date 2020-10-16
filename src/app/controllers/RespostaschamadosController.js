import * as Yup from 'yup';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Respostaschamados from '../models/Respostaschamados';
import Usuario from '../models/Usuario';
import Chamados from '../models/Chamados';

// import ContatoMail from '../jobs/ContatoMail';
// import Queue from '../../lib/Queue';

class RespostaschamadosController {
  async store(req, res) {
    const usuario_id = req.usuarioId;

    const { chamado_id, mensagem } = req.body;

    const data = format(new Date(), "dd/MM/yyyy', às' H':'mm", {
      locale: pt,
    });

    const resposta = await Respostaschamados.create({
      usuario_id,
      chamado_id,
      mensagem,
      data,
    });

    let ownerSocket = '';

    if (usuario_id !== 4) {
      ownerSocket = req.connectedUsers[4];
    } else {
      const chamado = await Chamados.findByPk(chamado_id);

      ownerSocket = req.connectedUsers[chamado.usuario_id];
    }

    if (ownerSocket) {
      req.io.to(ownerSocket).emit('resposta', resposta);
    }

    return res.json(resposta);
  }

  async index(req, res) {
    const { chamado_id } = req.body;

    const respostas = await Respostaschamados.findAll({
      where: { chamado_id },
      order: ['id'],
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['nome'],
        },
      ],
    });

    return res.json(respostas);
  }

  async update(req, res) {
    const usuario_id = req.usuarioId;

    const { chamado_id } = req.body;

    const respostas = await Respostaschamados.findAll({
      where: { chamado_id },
      order: ['id'],
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['nome'],
        },
      ],
    });

    await respostas.map((r) => {
      if (!r.lido && r.usuario_id !== usuario_id) {
        r.update({ lido: true });
      }
    });

    let ownerSocket = '';

    if (usuario_id !== 4) {
      ownerSocket = req.connectedUsers[4];
    } else {
      const chamado = await Chamados.findByPk(chamado_id);

      ownerSocket = req.connectedUsers[chamado.usuario_id];
    }

    if (ownerSocket) {
      req.io.to(ownerSocket).emit('respostas', respostas);
    }

    return res.json(respostas);
  }
}

export default new RespostaschamadosController();
