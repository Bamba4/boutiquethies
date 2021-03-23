import mongoose from 'mongoose';

const InitialStockSchema = new mongoose.Schema<any>({
    stockInitial: Number,
    deliveredAt: {
        type: Date,
        default: new Date(Date.now()).toDateString()
    }
});

const InitialStock = mongoose.model("InitialStock", InitialStockSchema);

export default InitialStock;