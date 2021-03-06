"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CommandeSchema = new mongoose_1.default.Schema({
    designation: {
        type: String
    },
    retour: Number,
    sortie: Number,
    deliveredAt: {
        type: Date,
        default: Date.now()
    },
    stockCourant: Number,
});
const Commande = mongoose_1.default.model("Commande", CommandeSchema);
exports.default = Commande;
