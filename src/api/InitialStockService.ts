import {Request, Response} from "express";
import Commande from "../model/commande";
import InitialStock from "../model/initialStock";

export const InitialStockService = {
    createInitialStock: async (req: Request, resp: Response) => {
        console.log('cree un nouveau initial Stock');
        const initialStockToCreate = new InitialStock(req.body);
        console.log({initialStockToCreate});
        await initialStockToCreate.save((err: any) => {
            if (err) resp.status(400).send(err);
            resp.send(initialStockToCreate)
        })
    },

    updateInitialStock: async (req: Request, resp: Response) => {
        console.log('updating initial stock');
        const id = req.params.id;
        const initialStockToReturn = await InitialStock.findByIdAndUpdate(id, req.body)
        console.log({ initialStockToReturn })
        return resp.send(initialStockToReturn)
    },

    deleteInitialStock: async (req: Request, resp: Response) => {
        console.log('deleting InitialS tock');
        const id = req.params.id;
        const initialStockToFound = await InitialStock.findById(id);
        resp.json({"msg": "Cette InitialStock a ete supprimer avec success"})
        initialStockToFound?.delete()
    },

    getInitialStockByDate: async (req: Request, resp: Response) => {
        console.log('commande by id');
        await InitialStock.find({'$or':[{'deliveredAt': req.params.date+'T00:00:00.000Z'}, {'updateAt': req.params.date+'T00:00:00.000Z'}]}).sort({'deliveredAt': '1'}).exec((err, commandes) => {
            if (err) console.log(err);
            else resp.send(commandes)
        })
    },

    getAllInitialStocks: async (req: Request, resp: Response) => {
        console.log('getting all Initial Stock.');
        await InitialStock.find({}).sort({}).exec((err, stocks) => {
            if (err) console.log(err);
            else resp.send(stocks)
        })
    },
}