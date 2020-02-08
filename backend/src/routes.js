import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import authMiddleware from './app/middleware/auth';
import {
  SessionController,
  RecipientController,
  FileController,
  DeliverymanController,
  DeliveryController,
  DeliverymanDeliveriesController,
} from './app/controllers';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/session', SessionController.store);

routes.get(
  '/deliveryman/:id/deliveries/:status',
  DeliverymanDeliveriesController.index
);

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/recipient', RecipientController.index);
routes.get('/recipient/:id', RecipientController.show);
routes.post('/recipient', RecipientController.store);
routes.put('/recipient/:id', RecipientController.update);
routes.delete('/recipient/:id', RecipientController.delete);

routes.get('/deliveryman', DeliverymanController.index);
routes.post('/deliveryman', DeliverymanController.store);
routes.get('/deliveryman/:id', DeliverymanController.show);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.get('/delivery', DeliveryController.index);
routes.post('/delivery', DeliveryController.store);
routes.get('/delivery/:id', DeliveryController.show);
routes.put('/delivery/:id', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.delete);

export default routes;
