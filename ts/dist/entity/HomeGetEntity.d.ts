import { FitkitNutritionApi2EntityBase } from '../FitkitNutritionApi2EntityBase';
import type { FitkitNutritionApi2SDK } from '../FitkitNutritionApi2SDK';
import type { Control } from '../types';
import type { HomeGet, HomeGetLoadMatch } from '../FitkitNutritionApi2Types';
declare class HomeGetEntity extends FitkitNutritionApi2EntityBase<HomeGet> {
    constructor(client: FitkitNutritionApi2SDK, entopts: any);
    make(this: HomeGetEntity): HomeGetEntity;
    load(this: any, reqmatch?: HomeGetLoadMatch, ctrl?: Control): Promise<HomeGetEntity>;
}
export { HomeGetEntity };
