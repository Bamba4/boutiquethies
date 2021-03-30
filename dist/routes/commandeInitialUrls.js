"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CommandeInitialService_1 = require("../api/CommandeInitialService");
const CommandeInitialRouter = express_1.default();
CommandeInitialRouter.get('/api/commandesinitial', CommandeInitialService_1.CommandeInitialService.getAllCommandeInitial);
CommandeInitialRouter.get('/api/commandesinitial/:date', CommandeInitialService_1.CommandeInitialService.getCommandeInitialByDate);
CommandeInitialRouter.post('/api/commandesinitial', CommandeInitialService_1.CommandeInitialService.createCommandeInitial);
CommandeInitialRouter.put('/api/commandesinitial/:id', CommandeInitialService_1.CommandeInitialService.updateCommandeInitial);
CommandeInitialRouter.delete('/api/commandesinitial/:id', CommandeInitialService_1.CommandeInitialService.deleteCommandeInitial);
exports.default = CommandeInitialRouter;
