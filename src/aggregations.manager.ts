import { findAggregation } from "./aggregations.repository"
export const getBestSupplierManager = async (name: string) =>{
    const result = await findAggregation(name)
    return result ? result.result : {}
}
