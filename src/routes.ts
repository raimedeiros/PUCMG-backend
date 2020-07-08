import express from 'express';
import EstoquesController from './controllers/EstoquesController'

const routes = express.Router();
const estoquesController = new EstoquesController()

routes.get('/estoques', estoquesController.index)

export default routes