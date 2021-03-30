"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CommandeInitialStockSchema = new mongoose_1.default.Schema({
    quantite: Number,
    deliveredAt: {
        type: Date,
        default: Date.now()
    },
    designation: String
});
const CommandeInitialStock = mongoose_1.default.model("CommandeInitialStock", CommandeInitialStockSchema);
exports.default = CommandeInitialStock;
