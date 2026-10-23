import { FitkitNutritionApi2EntityBase } from '../FitkitNutritionApi2EntityBase';
import type { FitkitNutritionApi2SDK } from '../FitkitNutritionApi2SDK';
import type { Control } from '../types';
import type { StaticAssetAssetGet, StaticAssetAssetGetLoadMatch } from '../FitkitNutritionApi2Types';
declare class StaticAssetAssetGetEntity extends FitkitNutritionApi2EntityBase<StaticAssetAssetGet> {
    constructor(client: FitkitNutritionApi2SDK, entopts: any);
    make(this: StaticAssetAssetGetEntity): StaticAssetAssetGetEntity;
    load(this: any, reqmatch?: StaticAssetAssetGetLoadMatch, ctrl?: Control): Promise<StaticAssetAssetGetEntity>;
}
export { StaticAssetAssetGetEntity };
