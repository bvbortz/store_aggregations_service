import mongoose from "mongoose";
import { ITEMS_COLLECTION_NAME, ORDERS_COLLECTION_NAME, SUPPLIERS_COLLECTION_NAME } from "./config";

interface Order {
    _id?: mongoose.Schema.Types.ObjectId;
    address: string;
    orderDate: Date;
    shopProfit?: number;
    items: Array<ItemInOrder>;
}
interface ItemInOrder {
    itemId: mongoose.Schema.Types.ObjectId;
    quantity: number;
    name: string;
    category: string;
    profit: number;
    price: number;
    supplierId: mongoose.Schema.Types.ObjectId;
}

const ordersSchema = new mongoose.Schema<Order>({
    address: { type: String, required: true },
    orderDate: { type: Date, required: true },
    shopProfit: { type: Number, required: true },
    items: {
        type: [
            {
                itemId: { type: mongoose.Schema.Types.ObjectId, required: true , ref: ITEMS_COLLECTION_NAME},
                quantity: { type: Number, required: true },
                category: { type: String, required: true },
                name: { type: String, required: true },
                profit: { type: Number, required: true },
                price: { type: Number, required: true },
                supplierId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: SUPPLIERS_COLLECTION_NAME },
            },
        ],
        required: true,
    },
});
export const Orders = mongoose.model(ORDERS_COLLECTION_NAME, ordersSchema);
