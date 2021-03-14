import {CommandeService} from '../api/commandeService';

import Router from 'express';

const CommandeRouter = Router();

CommandeRouter.get('/api/commandes', CommandeService.getAllCommande);
CommandeRouter.get('/api/commandes/:date', CommandeService.getCommandeByDate);
CommandeRouter.post('/api/commandes', CommandeService.createCommande);
CommandeRouter.put('/api/commandes/:id', CommandeService.updateCommande);
CommandeRouter.delete('/api/commandes/:id', CommandeService.deleteCommande);

export default CommandeRouter;