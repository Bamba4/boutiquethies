"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandeService_1 = require("../api/commandeService");
const express_1 = __importDefault(require("express"));
const CommandeRouter = express_1.default();
CommandeRouter.get('/api/commandes', commandeService_1.CommandeService.getAllCommande);
CommandeRouter.get('/api/commandes/:date', commandeService_1.CommandeService.getCommandeByDate);
CommandeRouter.post('/api/commandes', commandeService_1.CommandeService.createCommande);
CommandeRouter.put('/api/commandes/:id', commandeService_1.CommandeService.updateCommande);
CommandeRouter.delete('/api/commandes/:id', commandeService_1.CommandeService.deleteCommande);
exports.default = CommandeRouter;
