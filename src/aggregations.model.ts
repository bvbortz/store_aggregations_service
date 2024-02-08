import mongoose from "mongoose";
import { AGGREGATIONS_COLLECTION_NAME } from "./config";
interface IAggregations{
    name: string;
    result: any
}
const aggregationsSchema = new mongoose.Schema<IAggregations>({
    name: { type: String, required: true, unique: true },
    result: {type: Object, required: true}
});
aggregationsSchema.index({ name: 1 });
export const Aggregations = mongoose.model(AGGREGATIONS_COLLECTION_NAME, aggregationsSchema);
