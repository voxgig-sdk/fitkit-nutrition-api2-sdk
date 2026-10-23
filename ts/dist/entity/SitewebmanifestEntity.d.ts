import { FitkitNutritionApi2EntityBase } from '../FitkitNutritionApi2EntityBase';
import type { FitkitNutritionApi2SDK } from '../FitkitNutritionApi2SDK';
import type { Control } from '../types';
import type { Sitewebmanifest, SitewebmanifestLoadMatch } from '../FitkitNutritionApi2Types';
declare class SitewebmanifestEntity extends FitkitNutritionApi2EntityBase<Sitewebmanifest> {
    constructor(client: FitkitNutritionApi2SDK, entopts: any);
    make(this: SitewebmanifestEntity): SitewebmanifestEntity;
    load(this: any, reqmatch?: SitewebmanifestLoadMatch, ctrl?: Control): Promise<SitewebmanifestEntity>;
}
export { SitewebmanifestEntity };
