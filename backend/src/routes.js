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
  DeliveryStartController,
  DeliveryEndController,
  DeliveryProblemsController,
} from './app/controllers';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/session', SessionController.store);

routes.get(
  '/deliveryman/:id/deliveries/:status',
  DeliverymanDeliveriesController.index
);

routes.put(
  '/deliveryman/:id/deliveries/:delivery_id/start',
  DeliveryStartController.update
);

routes.put(
  '/deliveryman/:id/deliveries/:delivery_id/end',
  DeliveryEndController.update
);

routes.post(
  '/deliveryman/:deliveryman_id/delivery/:delivery_id/problems',
  DeliveryProblemsController.store
);

routes.get(
  '/recipient/:recipient_id/delivery/problems',
  DeliveryProblemsController.index
);

routes.get('/delivery/:id/problems', DeliveryProblemsController.show);

routes.delete(
  '/recipient/:recipient_id/delivery/:problems_id/cancel-delivery',
  DeliveryProblemsController.delete
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
