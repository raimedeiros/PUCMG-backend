import express from 'express';
import EstoquesController from './controllers/EstoquesController'
import ProdutosController from './controllers/ProdutosController'

const routes = express.Router();
const estoquesController = new EstoquesController()
const produtosController = new ProdutosController()

routes.get('/estoques', estoquesController.index)
routes.post('/estoques', estoquesController.create)
routes.post(`/estoques/:id`, estoquesController.update)
routes.delete('/estoques', estoquesController.delete)

routes.get('/produtos', produtosController.index)
routes.post('/produtos', produtosController.create)
routes.post('/produtos/:id', produtosController.update)

export default routes