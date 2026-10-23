import { FitkitNutritionApi2EntityBase } from '../FitkitNutritionApi2EntityBase';
import type { FitkitNutritionApi2SDK } from '../FitkitNutritionApi2SDK';
import type { Control } from '../types';
import type { Sitemap, SitemapLoadMatch } from '../FitkitNutritionApi2Types';
declare class SitemapEntity extends FitkitNutritionApi2EntityBase<Sitemap> {
    constructor(client: FitkitNutritionApi2SDK, entopts: any);
    make(this: SitemapEntity): SitemapEntity;
    load(this: any, reqmatch?: SitemapLoadMatch, ctrl?: Control): Promise<SitemapEntity>;
}
export { SitemapEntity };
