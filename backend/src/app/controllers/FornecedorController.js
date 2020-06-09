import Fornecedor from '../models/Fornecedor';

class FornecedorController {
  // busca todos os registros da tabela
  async index(req, res) {
    const fornecedores = await Fornecedor.findAll();

    return res.json(fornecedores);
  }

  // busca um registro na tabela
  async indexOne(req, res) {
    const fornecedores = await Fornecedor.findByPk(req.params.id);
    // console.log(fornecedores);
    return res.json(fornecedores);
  }

  // grava um registro na tabela
  async store(req, res) {
    // verifica se já existe um cnpj cadastrado
    const cnpjExists = await Fornecedor.findOne({
      where: {
        cnpj: req.body.cnpj,
      },
    });
    // se existir um cnpj ja cadastrado, existe a mensagem com o status 400
    if (cnpjExists) {
      return res.status(400).json({ error: 'CNPJ já existe' });
    }
    // se não cair no if acima, insere o registro
    const fornecedor = await Fornecedor.create(req.body);

    return res.json(fornecedor);
  }

  async update(req, res) {
    const dados = req.body;
    const idForn = req.params.id;

    await Fornecedor.update(
      {
        cnpj: req.body.cnpj,
        nome: req.body.nome,
        situacao: req.body.situacao,
        logradouro: req.body.logradouro,
        bairro: req.body.bairro,
        numero: req.body.numero,
        cep: req.body.cep,
        municipio: req.body.municipio,
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
    await Fornecedor.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ message: 'Registro deletado com sucesso.' });
  }
}

export default new FornecedorController();
