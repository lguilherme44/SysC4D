import Usuario from '../models/Usuario';

class UsuarioController {
  // busca todos os registros da tabela
  async index(req, res) {
    const usuarios = await Usuario.findAll();

    return res.json(usuarios);
  }

  // busca um registro na tabela
  async indexOne(req, res, id) {
    // console.log(req.params.id);
    const usuario = await Usuario.findByPk(req.params.id);
    // console.log(usuario);
    return res.json(usuario);
  }

  // grava um registro na tabela
  async store(req, res) {
    const userExists = await Usuario.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    const { nome, email } = await Usuario.create(req.body);

    return res.json({ nome, email });
  }

  async update(req, res) {
    await Usuario.update(
      {
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password,
      },

      {
        returning: true,
        where: { id: req.params.id },
      }
    );

    res.json({ message: 'Registro atualizado com sucesso.' });
  }

  // deleta um registro
  async destroy(req, res) {
    // realiza uma busca pelo id, se encontrar, deleta e retornar uma mensagem ao frontend
    await Usuario.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ message: 'Registro deletado com sucesso.' });
  }
}

export default new UsuarioController();
