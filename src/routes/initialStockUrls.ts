
import Router from 'express';
import { InitialStockService } from '../api/InitialStockService';

const InitialStockRouter = Router();

InitialStockRouter.get('/api/sass', InitialStockService.getSASS);
InitialStockRouter.get('/api/stock', InitialStockService.getAllInitialStocks);
InitialStockRouter.get('/api/stock/:date', InitialStockService.getInitialStockByDate);
InitialStockRouter.post('/api/stock', InitialStockService.createInitialStock);
InitialStockRouter.put('/api/stock/:id', InitialStockService.updateInitialStock);
InitialStockRouter.delete('/api/stock/:id', InitialStockService.deleteInitialStock);

export default InitialStockRouter;