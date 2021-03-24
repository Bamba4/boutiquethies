import mongoose from 'mongoose';

const InitialStockSchema = new mongoose.Schema<any>({
    stockInitial: Number,
    deliveredAt: {
        type: Date,
        default: Date.now()
    }
});

const InitialStock = mongoose.model("InitialStock", InitialStockSchema);

export default InitialStock;