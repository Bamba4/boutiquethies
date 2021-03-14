import mongoose from 'mongoose';

const CommandeSchema = new mongoose.Schema<any>({
    designation: {
        type: String
    },
    quantite: {
        type: Number
    },
    retour: Number,
    sortie: Number,
    deliveredAt: {
        type: Date,
        default: new Date(Date.now()).toDateString()
    },
    updateAt: {
        type: Date,
        default: new Date(Date.now()).toDateString()
    }
});

const Commande = mongoose.model("Commande", CommandeSchema);

export default Commande;