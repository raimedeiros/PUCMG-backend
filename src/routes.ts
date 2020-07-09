import express from 'express';
import TiposEstoquesController from './controllers/TiposEstoquesController'
import EstoquesController from './controllers/EstoquesController'
import ProdutosController from './controllers/ProdutosController'

const routes = express.Router();
const estoquesController = new EstoquesController()
const tiposEstoquesController = new TiposEstoquesController()
const produtosController = new ProdutosController()

routes.get('/tipos-estoques', tiposEstoquesController.index)
routes.get('/tipos-estoques/:id', tiposEstoquesController.show)
routes.post('/tipos-estoques', tiposEstoquesController.create)
routes.post('/tipos-estoques/:id', tiposEstoquesController.update)
routes.delete('/tipos-estoques', tiposEstoquesController.delete)

routes.get('/estoques', estoquesController.index)
routes.get('/estoques/:id', estoquesController.show)
routes.post('/estoques', estoquesController.create)
routes.post('/estoques/:id', estoquesController.update)
routes.delete('/estoques', estoquesController.delete)

routes.get('/produtos', produtosController.index)
routes.post('/produtos', produtosController.create)
routes.post('/produtos/:id', produtosController.update)

export default routes