import express from 'express';
import TiposEstoquesController from './controllers/TiposEstoquesController'
import EstoquesController from './controllers/EstoquesController'
import ProdutosController from './controllers/ProdutosController'
import FuncionariosController from './controllers/FuncionariosController'
import DesperdiciosController from './controllers/DesperdiciosController'
import FornecedoresController from './controllers/FornecedoresController'

const routes = express.Router();
const estoquesController = new EstoquesController()
const tiposEstoquesController = new TiposEstoquesController()
const produtosController = new ProdutosController()
const funcionariosController = new FuncionariosController()
const desperdiciosController = new DesperdiciosController()
const fornecedoresController = new FornecedoresController()

routes.get('/tipos-estoques', tiposEstoquesController.index)
routes.get('/tipos-estoques/:id', tiposEstoquesController.show)
routes.post('/tipos-estoques', tiposEstoquesController.create)
routes.post('/tipos-estoques/:id', tiposEstoquesController.update)
routes.delete('/tipos-estoques/:id', tiposEstoquesController.delete)

routes.get('/estoques', estoquesController.index)
routes.get('/estoques/:id', estoquesController.show)
routes.post('/estoques', estoquesController.create)
routes.post('/estoques/:id', estoquesController.update)
routes.delete('/estoques/:id', estoquesController.delete)

routes.get('/produtos', produtosController.index)
routes.get('/produtos/:id', produtosController.show)
routes.post('/produtos', produtosController.create)
routes.post('/produtos/:id', produtosController.update)

routes.get('/funcionarios',funcionariosController.index)
routes.get('/funcionarios/:id',funcionariosController.show)
routes.post('/funcionarios',funcionariosController.create)
routes.post('/funcionarios/:id',funcionariosController.update)
routes.delete('/funcionarios/:id',funcionariosController.delete)

routes.get('/desperdicios',desperdiciosController.index)
routes.get('/desperdicios/:id',desperdiciosController.show)
routes.post('/desperdicios',desperdiciosController.create)
routes.post('/desperdicios/:id',desperdiciosController.update)
routes.delete('/desperdicios/:id',desperdiciosController.delete)

routes.get('/fornecedores',fornecedoresController.index)
routes.get('/fornecedores/:id',fornecedoresController.show)
routes.post('/fornecedores',fornecedoresController.create)
routes.post('/fornecedores/:id',fornecedoresController.update)
routes.delete('/fornecedores/:id',fornecedoresController.delete)

export default routes