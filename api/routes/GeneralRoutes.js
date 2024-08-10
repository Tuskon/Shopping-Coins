let express = require ('express');
const ProdutoController= require('../controllers/ProdutoController')
const UsuarioController=require('../controllers/UsuarioController')
let router = express.Router();

router.get('/',(req,res)=>{
    res.send('Bem vindo a API de José Luiz Rodrigues dos Santos')
})


router.get('/produtos/FindAll',ProdutoController.ProdutoFindAll)

router.post('/produtos/Register',ProdutoController.ProdutoRegister)

router.put('/produtos/UpdateQuantidade',ProdutoController.ProdutoUpdateQuantidade)

router.put('/produtos/UpdatePreco',ProdutoController.ProdutoUpdatePreco)

router.delete('/produtos/Delete',ProdutoController.ProdutoDestroyer)

router.get('/usuarios/FindOne',UsuarioController.UsuarioFindOne)

router.get('/usuarios/FindAll',UsuarioController.UsuarioFindAll)

router.get('/usuarios/Saldo',UsuarioController.UsuarioSaldo)

router.post('/usuarios/Register',UsuarioController.UsuarioRegister)

router.put('/usuarios/UpdateName',UsuarioController.UsuarioUpdateName)

router.put('/usuarios/UpdateSenha',UsuarioController.UsuarioUpdateSenha)

router.put('/usuarios/UpdateSaldo',UsuarioController.UsuarioUpdateSaldo)

router.delete('/usuarios/Delete',UsuarioController.UsuarioDestroyer)

module.exports= router;


