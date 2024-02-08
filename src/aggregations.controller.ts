import { RequestHandler } from "express";
import { getBestSupplierManager } from "./aggregations.manager";
export const getBestSupplierController: RequestHandler = async (req, res) => {
    const { name } = req.body;
    res.json(await getBestSupplierManager(name));
};
