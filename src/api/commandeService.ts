import {Request, Response} from "express";
import Commande from "../model/commande";

export const CommandeService = {
    createCommande: async (req: Request, resp: Response) => {
        console.log('cree un nouveau commande');
        const commandeToCreate = new Commande(req.body);
        console.log("kfkfkjf", {commandeToCreate});
        await commandeToCreate.save((err: any) => {
            if (err) resp.status(400).send(err);
            resp.send(commandeToCreate)
        })
    },

    updateCommande: async (req: Request, resp: Response) => {
        console.log('updating commande');
        const id = req.params.id;
        const commandeToReturn = await Commande.findByIdAndUpdate(id, req.body)
        console.log({ commandeToReturn })
        return resp.send(commandeToReturn)
    },

    deleteCommande: async (req: Request, resp: Response) => {
        console.log('deleting commande');
        const id = req.params.id;
        const commandeToFound = await Commande.findById(id);
        resp.json({"msg": "Cette commande a ete supprimer avec success"})
        commandeToFound?.delete()
    },

    getAllCommande: async (req: Request, resp: Response) => {
        console.log('getting all commandes.');
        await Commande.find({}).sort({}).exec((err, commandes) => {
            if (err) console.log(err);
            else resp.send(commandes)
        })
    },

    getCommandeByDate: async (req: Request, resp: Response) => {
        console.log('commande by id');
        await Commande.find({'$or':[{'deliveredAt': req.params.date+'T00:00:00.000Z'}, {'updateAt': req.params.date+'T00:00:00.000Z'}]}).sort({'deliveredAt': '1'}).exec((err, commandes) => {
            if (err) console.log(err);
            else resp.send(commandes)
        })
    }
}