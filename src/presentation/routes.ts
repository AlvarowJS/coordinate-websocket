import { Router } from 'express';
import { BusRoute } from './bus/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    // Definir las rutas
    router.use('/api/bus', BusRoute.routes);



    return router;
  }


}

