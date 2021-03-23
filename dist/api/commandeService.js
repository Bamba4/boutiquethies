"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandeService = void 0;
const commande_1 = __importDefault(require("../model/commande"));
exports.CommandeService = {
    createCommande: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('cree un nouveau commande');
        const commandeToCreate = new commande_1.default(req.body);
        console.log({ commandeToCreate });
        yield commandeToCreate.save((err) => {
            if (err)
                resp.status(400).send(err);
            resp.send(commandeToCreate);
        });
    }),
    updateCommande: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('updating commande');
        const id = req.params.id;
        const commandeToReturn = yield commande_1.default.findByIdAndUpdate(id, req.body);
        console.log({ commandeToReturn });
        return resp.send(commandeToReturn);
    }),
    deleteCommande: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('deleting commande');
        const id = req.params.id;
        const commandeToFound = yield commande_1.default.findById(id);
        resp.json({ "msg": "Cette commande a ete supprimer avec success" });
        commandeToFound === null || commandeToFound === void 0 ? void 0 : commandeToFound.delete();
    }),
    getAllCommande: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('getting all commandes.');
        yield commande_1.default.find({}).sort({}).exec((err, commandes) => {
            if (err)
                console.log(err);
            else
                resp.send(commandes);
        });
    }),
    getCommandeByDate: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('commande by id');
        yield commande_1.default.find({ '$or': [{ 'deliveredAt': req.params.date + 'T00:00:00.000Z' }, { 'updateAt': req.params.date + 'T00:00:00.000Z' }] }).sort({ 'deliveredAt': '1' }).exec((err, commandes) => {
            if (err)
                console.log(err);
            else
                resp.send(commandes);
        });
    })
};
