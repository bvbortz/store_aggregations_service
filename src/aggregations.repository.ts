import { Aggregations } from "./aggregations.model";
import { Orders } from "./orders.model";

export const orderAggregation = async (pipeline: Array<any>) => {
    return Orders.aggregate(pipeline).exec();
};
export const writeAggregation = (name: string, result: any) => {
    return Aggregations.findOneAndUpdate({name: name}, {name: name, result: result}, { upsert: true, new: true}).exec()
}
export const findAggregation = (name: string) => {
    return Aggregations.findOne({name: name}).exec()
}