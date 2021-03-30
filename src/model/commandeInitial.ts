import mongoose from 'mongoose';

const CommandeInitialStockSchema = new mongoose.Schema<any>({
    quantite: Number,
    deliveredAt: {
        type: Date,
        default: Date.now()
    },
    designation: String
});

const CommandeInitialStock = mongoose.model("CommandeInitialStock", CommandeInitialStockSchema);

export default CommandeInitialStock;