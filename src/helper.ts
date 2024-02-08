import { orderAggregation } from "./aggregations.repository";

export const getBestSupplier = async () => {
    const pipeline = [
        { $unwind: "$items" },
        {
            $group: {
                _id: "$items.supplierId",
                totalProfit: { $sum: "$items.profit" },
            },
        },
        { $sort: { totalProfit: -1 } },
        { $limit: 1 },
        {
            $lookup: {
                from: "suppliers",
                localField: "_id",
                foreignField: "_id",
                let: { id: "$_id" },
                pipeline: [{ $match: { $expr: { $eq: ["$_id", "$$id"] } } }, { $project: { name: 1, _id: 0 } }],
                as: "_supplierData",
            },
        },
        { $unwind: "$_supplierData" },
        { $set: { name: "$_supplierData.name" } },
        { $project: { _id: 0, name: 1 } },
    ];
    return await orderAggregation(pipeline);
};