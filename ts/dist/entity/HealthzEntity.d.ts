import { FitkitNutritionApi2EntityBase } from '../FitkitNutritionApi2EntityBase';
import type { FitkitNutritionApi2SDK } from '../FitkitNutritionApi2SDK';
import type { Control } from '../types';
import type { Healthz, HealthzLoadMatch } from '../FitkitNutritionApi2Types';
declare class HealthzEntity extends FitkitNutritionApi2EntityBase<Healthz> {
    constructor(client: FitkitNutritionApi2SDK, entopts: any);
    make(this: HealthzEntity): HealthzEntity;
    load(this: any, reqmatch?: HealthzLoadMatch, ctrl?: Control): Promise<HealthzEntity>;
}
export { HealthzEntity };
