'use strict'

const { where } = require('sequelize')
const { Usuario } = require('../models');
const usuario = require('../models/usuario');


class UsuarioController {

    static async UsuarioFindOne(req, res) {

        try {

            const { email, senha } = req.query;

            const usuario = await Usuario.findOne({ where: { email, senha }, attributes: ['primeiro_nome', 'senha', 'nome', 'email', 'saldo'] })

            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json('Usuário não cadastrado')
            }


        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }

    }

    static async UsuarioSaldo(req, res) {

        try {

            const { email } = req.query;

            const usuarioativo = await Usuario.findOne({ where: { email }, attributes: ['saldo'] })

            if (usuarioativo) {
                res.status(200).json(usuarioativo);
            } else {
                res.status(404).json('Usuário não cadastrado')
            }


        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }


    }

    static async UsuarioFindAll(req, res) {

        try {

            const usuario = await Usuario.findAll({ attributes: ['nome', 'primeiro_nome', 'saldo', 'senha', 'email'] })

            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json('Nenhum usuário cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    static async UsuarioRegister(req, res) {

        try {

            const usuarioativo = await Usuario.findOne({ where: { email: req.body.email } })

            if (usuarioativo) {
                res.status(404).json({ message: "Esse usuário já existe !" })
            } else {
                await Usuario.create({
                    nome: req.body.nome,
                    primeiro_nome: req.body.primeiro_nome,
                    saldo: req.body.saldo,
                    senha: req.body.senha,
                    email: req.body.email,
                })
                res.status(201).json({ message: "Usuário cadastrado com sucesso" })
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async UsuarioUpdateName(req, res) {

        try {

            const usuarioativo = await Usuario.findOne({ where: { email: req.body.email } })

            if (usuarioativo) {

                await Usuario.update(
                    {
                        nome: req.body.nome,
                        primeiro_nome: req.body.primeiro_nome
                    },
                    { where: { email: req.body.email } }
                )

                res.status(201).json({ message: 'Nome do usuário atualizado' })

            } else {
                res.status(404).json('Nenhum usuário cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    static async UsuarioUpdateSenha(req, res) {

        try {

            const usuarioativo = await Usuario.findOne({ where: { email: req.body.email } })

            if (usuarioativo) {

                await Usuario.update(
                    { senha: req.body.senha },
                    { where: { email: req.body.email } }
                )

                res.status(201).json({ message: 'Senha do usuário atualizado' })

            } else {
                res.status(404).json('Nenhum usuário cadastrado')
            }

        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }


    static async UsuarioUpdateSaldo(req, res) {
        try {

            const { email, saldo } = req.body;
            const usuarioativo = await Usuario.findOne({ where: { email: email } });

            if (usuarioativo) {
                await Usuario.update(
                    { saldo: saldo },
                    { where: { email: email } }
                );
                res.status(201).json({ message: 'Usuário Atualizado' });
            } else {
                res.status(404).json('Nenhum Usuário cadastrado');
            }
        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }
    }

    static async UsuarioDestroyer(req, res) {

        try {

            const usuarioativo = await Usuario.findOne({ where: { email } })

            if (usuarioativo) {
                await Usuario.destroy({
                    where: {
                        email: req.body.email,
                    }
                })
                res.status(201).json({ message: 'Usuário Removido' });
            } else {
                res.status(404).json('Usuário não cadastrado')
            }


        } catch (error) {
            res.status(400).json({ error: true, message: error.message });
        }


    }

}

module.exports = UsuarioController;