import Cliente from '../models/Cliente';

class ClienteController {
  async index(req, res) {
    const clientes = await Cliente.findAll();

    return res.json(clientes);
  }

  async store(req, res) {
    const cpfExists = await Cliente.findOne({
      where: {
        cpf: req.body.cpf,
      },
    });
    if (cpfExists) {
      return res.status(400).json({ error: 'CPF já existe' });
    }

    const cliente = await Cliente.create(req.body);

    return res.json(cliente);
  }
}

export default new ClienteController();
