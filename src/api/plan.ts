import { Api } from "./api";

export class PlanApi extends Api {
    public getPlans(params: object) {
        const res = super.get('plans', params)
        return res;
    }
}