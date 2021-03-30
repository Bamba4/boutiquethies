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
exports.CommandeInitialService = void 0;
const commandeInitial_1 = __importDefault(require("../model/commandeInitial"));
exports.CommandeInitialService = {
    createCommandeInitial: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('cree un nouveau commande initial');
        const commandeInitialToCreate = new commandeInitial_1.default(req.body);
        console.log({ commandeInitialToCreate });
        yield commandeInitialToCreate.save((err) => {
            if (err)
                resp.status(400).send(err);
            resp.send(commandeInitialToCreate);
        });
    }),
    updateCommandeInitial: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('updating commande initial');
        const id = req.params.id;
        const commandeInitialToReturn = yield commandeInitial_1.default.findByIdAndUpdate(id, req.body);
        console.log({ commandeInitialToReturn });
        return resp.send(commandeInitialToReturn);
    }),
    deleteCommandeInitial: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('deleting commande Initial');
        const id = req.params.id;
        const commandeInitialToFound = yield commandeInitial_1.default.findById(id);
        resp.json({ "msg": "Cette commande initial a ete supprimer avec success" });
        commandeInitialToFound === null || commandeInitialToFound === void 0 ? void 0 : commandeInitialToFound.delete();
    }),
    getAllCommandeInitial: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('getting all commandes Initiales.');
        yield commandeInitial_1.default.find({}).sort({}).exec((err, commandesInital) => {
            if (err)
                console.log(err);
            else
                resp.send(commandesInital);
        });
    }),
    getCommandeInitialByDate: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('commande initial by id');
        yield commandeInitial_1.default.find({ '$or': [{ 'deliveredAt': req.params.date + 'T00:00:00.000Z' }, { 'updateAt': req.params.date + 'T00:00:00.000Z' }] }).sort({ 'deliveredAt': '1' }).exec((err, commandes) => {
            if (err)
                console.log(err);
            else
                resp.send(commandes);
        });
    })
};
