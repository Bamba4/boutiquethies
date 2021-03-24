"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const InitialStockSchema = new mongoose_1.default.Schema({
    stockInitial: Number,
    deliveredAt: {
        type: Date,
        default: Date.now()
    }
});
const InitialStock = mongoose_1.default.model("InitialStock", InitialStockSchema);
exports.default = InitialStock;
