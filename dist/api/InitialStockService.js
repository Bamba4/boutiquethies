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
exports.InitialStockService = void 0;
const initialStock_1 = __importDefault(require("../model/initialStock"));
exports.InitialStockService = {
    createInitialStock: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('cree un nouveau initial Stock');
        const initialStockToCreate = new initialStock_1.default(req.body);
        console.log({ initialStockToCreate });
        yield initialStockToCreate.save((err) => {
            if (err)
                resp.status(400).send(err);
            resp.send(initialStockToCreate);
        });
    }),
    updateInitialStock: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('updating initial stock');
        const id = req.params.id;
        const initialStockToReturn = yield initialStock_1.default.findByIdAndUpdate(id, req.body);
        console.log({ initialStockToReturn });
        return resp.send(initialStockToReturn);
    }),
    deleteInitialStock: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('deleting InitialS tock');
        const id = req.params.id;
        const initialStockToFound = yield initialStock_1.default.findById(id);
        resp.json({ "msg": "Cette InitialStock a ete supprimer avec success" });
        initialStockToFound === null || initialStockToFound === void 0 ? void 0 : initialStockToFound.delete();
    }),
    getInitialStockByDate: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('commande by id');
        yield initialStock_1.default.find({ '$or': [{ 'deliveredAt': req.params.date + 'T00:00:00.000Z' }, { 'updateAt': req.params.date + 'T00:00:00.000Z' }] }).sort({ 'deliveredAt': '1' }).exec((err, commandes) => {
            if (err)
                console.log(err);
            else
                resp.send(commandes);
        });
    }),
    getAllInitialStocks: (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('getting all Initial Stock.');
        yield initialStock_1.default.find({}).sort({}).exec((err, stocks) => {
            if (err)
                console.log(err);
            else
                resp.send(stocks);
        });
    }),
};
