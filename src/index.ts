import * as nodeSchedule from "node-schedule";
import { getBestSupplierController } from "./aggregations.controller";
import { app } from "./server";
import { getBestSupplier } from "./helper";
import { writeAggregation } from "./aggregations.repository";

app.get("/aggregations/", getBestSupplierController);
nodeSchedule.scheduleJob("* * * * *", async () => {
    const result = await getBestSupplier();
    await writeAggregation("best-supplier", result);
    return;
});
export { app };
