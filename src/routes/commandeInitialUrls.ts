
import Router from 'express';
import { CommandeInitialService } from '../api/CommandeInitialService';

const CommandeInitialRouter = Router();

CommandeInitialRouter.get('/api/commandesinitial', CommandeInitialService.getAllCommandeInitial);
CommandeInitialRouter.get('/api/commandesinitial/:date', CommandeInitialService.getCommandeInitialByDate);
CommandeInitialRouter.post('/api/commandesinitial', CommandeInitialService.createCommandeInitial);
CommandeInitialRouter.put('/api/commandesinitial/:id', CommandeInitialService.updateCommandeInitial);
CommandeInitialRouter.delete('/api/commandesinitial/:id', CommandeInitialService.deleteCommandeInitial);

export default CommandeInitialRouter;