import mongoose from 'mongoose';

const CommandeSchema = new mongoose.Schema<any>({
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

const Commande = mongoose.model("Commande", CommandeSchema);

export default Commande;