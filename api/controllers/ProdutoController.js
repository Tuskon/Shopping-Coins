'user strict'

const {where}= require('sequelize')
const {Produto} = require('../models');
const produto = require('../models/produto');


class ProdutoController {

    /*static async ProdutoFindOne(req, res) {

        try {

            const { email, password } = req.query;

            const user = await Produto.findOne({ where: { email, password }, attributes: ['username','email'] })

            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json('Usuário não cadastrado')
            }


        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }


    }*/

    static async ProdutoPreco(req, res) {

        try {

            const { nome } = req.query;

            const produto = await Produto.findOne({ where: { nome}, attributes: ['preco'] })

            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).json('Produto não cadastrado')
            }


        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }


    }

    static async ProdutoFindAll(req, res) {

        try {

            const produto = await Produto.findAll({ attributes: ['id','nome', 'preco', 'quantidade','type'] })

            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).json('Nenhum produto cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    static async ProdutoRegister(req, res) {

        try {

            const produtoativo = await Produto.findOne({ where: { nome: req.body.nome } })

            if (produtoativo) {
                res.status(404).json({ message: "Esse produto já existe !" })
            } else {
                await Produto.create({
                    preco: req.body.preco,
                    nome: req.body.nome,
                    quantidade: req.body.quantidade
                })
                res.status(201).json({ message: "Produto cadastrado com sucesso" })
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async ProdutoUpdateQuantidade(req, res) {


        const { nome, quantidade } = req.body;
        

        try {

            const produtoativo = await Produto.findOne({ where: { nome: nome } })

            if (produtoativo) {

                await Produto.update(
                    {quantidade: quantidade},
                    {where: { nome: nome }}
                )

                res.status(201).json({ message: 'Produto Atualizado' })

            } else {
                res.status(404).json('Nenhum produto cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async ProdutoUpdatePreco(req, res) {
        try {
            const { nome, preco } = req.body;
            const produtoativo = await Produto.findOne({ where: { nome: nome } });
    
            if (produtoativo) {
                await Produto.update(
                    { preco: preco },
                    { where: { nome: nome } }
                );
                res.status(201).json({ message: 'Produto Atualizado' });
            } else {
                res.status(404).json('Nenhum Produto cadastrado');
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }
    

    static async ProdutoDestroyer(req, res) {

        try {

            const produtoativo = await Produto.findOne({ where: { nome: req.body.nome }})

            if (produtoativo) {
                await Produto.destroy({where:{
                    nome: req.body.nome,
                }})
                res.status(201).json({ message: 'Produto Removido' });
            } else {
                res.status(404).json('Produto não cadastrado')
            }


        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }


    }
}

module.exports = ProdutoController;