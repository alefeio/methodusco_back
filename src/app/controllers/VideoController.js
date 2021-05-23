import Video from '../models/Video';

class VideoController {
  async store(req, res) {
    const { video, urlvideo, modulo, urlmodulo, aula, titulo } = req.body;

    const videoExiste = await Video.findOne({ where: { video } });

    if (videoExiste) {
      return res.json({ erro: 'Vídeo já existe!' });
    }

    const { id } = await Video.create({
      video,
      urlvideo,
      modulo,
      urlmodulo,
      aula,
      titulo
    });

    return res.json({
      id,
      video,
      urlvideo,
      modulo,
      urlmodulo,
      aula,
      titulo
    });
  }

  async index(req, res) {
    const videos = await Video.findAll();

    return res.json(videos);
  }

  async detail(req, res) {
    const urlvideo = req.params.urlvideo;

    const video = await Video.findOne({ where: { urlvideo } });

    return res.json(video);
  }

  async update(req, res) {
    const { video, urlvideo, modulo, urlmodulo, aula, titulo } = req.body;

    const registro = await Video.findByPk(req.params.id);

    const registroExiste = await Video.findOne({ where: { video } });

    if (registroExiste) {
      return res.status(400).json({ erro: 'Vídeo já existe!' });
    }

    const { id } = await registro.update(req.body);

    return res.json({
      id,
      video,
      urlvideo,
      modulo,
      urlmodulo,
      aula,
      titulo,
    });
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const registroExiste = await Video.findOne({ where: { id: req.params.id } });

    if (registroExiste) {
      await Video.destroy({ where: { id: registroExiste.id } });

      return res.json({ msg: 'Operação realizada com sucesso!' });
    }

    return res.json();
  }
}

export default new VideoController();
