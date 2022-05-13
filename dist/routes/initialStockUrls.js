"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const InitialStockService_1 = require("../api/InitialStockService");
const InitialStockRouter = express_1.default();
InitialStockRouter.get('/api/sass', InitialStockService_1.InitialStockService.getSASS);
InitialStockRouter.get('/api/stock', InitialStockService_1.InitialStockService.getAllInitialStocks);
InitialStockRouter.get('/api/stock/:date', InitialStockService_1.InitialStockService.getInitialStockByDate);
InitialStockRouter.post('/api/stock', InitialStockService_1.InitialStockService.createInitialStock);
InitialStockRouter.put('/api/stock/:id', InitialStockService_1.InitialStockService.updateInitialStock);
InitialStockRouter.delete('/api/stock/:id', InitialStockService_1.InitialStockService.deleteInitialStock);
exports.default = InitialStockRouter;
