import express from 'express';
import EstoquesController from './controllers/EstoquesController'

const routes = express.Router();
const estoquesController = new EstoquesController()

routes.get('/estoques', estoquesController.index)
routes.post('/estoques', estoquesController.create)
routes.post(`/estoques/:id`, estoquesController.update)
routes.delete('/estoques', estoquesController.delete)

export default routes