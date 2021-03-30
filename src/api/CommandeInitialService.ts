import {Request, Response} from "express";
import Commande from "../model/commande";
import CommandeInitialStock from "../model/commandeInitial";

export const CommandeInitialService = {
    createCommandeInitial: async (req: Request, resp: Response) => {
        console.log('cree un nouveau commande initial');
        const commandeInitialToCreate = new CommandeInitialStock(req.body);
        console.log({commandeInitialToCreate});
        await commandeInitialToCreate.save((err: any) => {
            if (err) resp.status(400).send(err);
            resp.send(commandeInitialToCreate)
        })
    },

    updateCommandeInitial: async (req: Request, resp: Response) => {
        console.log('updating commande initial');
        const id = req.params.id;
        const commandeInitialToReturn = await CommandeInitialStock.findByIdAndUpdate(id, req.body)
        console.log({ commandeInitialToReturn })
        return resp.send(commandeInitialToReturn)
    },

    deleteCommandeInitial: async (req: Request, resp: Response) => {
        console.log('deleting commande Initial');
        const id = req.params.id;
        const commandeInitialToFound = await CommandeInitialStock.findById(id);
        resp.json({"msg": "Cette commande initial a ete supprimer avec success"})
        commandeInitialToFound?.delete()
    },

    getAllCommandeInitial: async (req: Request, resp: Response) => {
        console.log('getting all commandes Initiales.');
        await CommandeInitialStock.find({}).sort({}).exec((err, commandesInital) => {
            if (err) console.log(err);
            else resp.send(commandesInital)
        })
    },

    getCommandeInitialByDate: async (req: Request, resp: Response) => {
        console.log('commande initial by id');
        await CommandeInitialStock.find({'$or':[{'deliveredAt': req.params.date+'T00:00:00.000Z'}, {'updateAt': req.params.date+'T00:00:00.000Z'}]}).sort({'deliveredAt': '1'}).exec((err, commandes) => {
            if (err) console.log(err);
            else resp.send(commandes)
        })
    }
}