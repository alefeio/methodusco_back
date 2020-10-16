import Niveis from '../models/Niveis';

class NiveisController {
  async store(req, res) {
    const { nome } = req.body;

    const registroExiste = await Niveis.findOne({ where: { nome } });

    if (registroExiste) {
      return res.status(400).json({ erro: 'Registro já existe!' });
    }

    const { id } = await Niveis.create({
      nome,
    });

    return res.json({
      id,
      nome,
    });
  }

  async index(req, res) {
    const registros = await Niveis.findAll();

    return res.json(registros);
  }

  async update(req, res) {
    const { nome } = req.body;

    const registro = await Niveis.findByPk(req.params.id);

    if (nome !== registro.nome) {
      const registroExiste = await Niveis.findOne({ where: { nome } });

      if (registroExiste) {
        return res.status(400).json({ erro: 'Registro já existe!' });
      }

      const { id } = await registro.update(req.body);

      return res.json({
        id,
        nome,
      });
    }

    return res.json({ nome });
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const registroExiste = await Niveis.findOne({
      where: { id: req.params.id },
    });

    if (registroExiste) {
      await Niveis.destroy({ where: { id: registroExiste.id } });

      return res.json({ msg: 'Operação realizada com sucesso!' })
    }

    return res.json();
  }
}

export default new NiveisController();
