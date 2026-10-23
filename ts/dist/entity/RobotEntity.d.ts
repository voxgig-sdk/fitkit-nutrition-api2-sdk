import { FitkitNutritionApi2EntityBase } from '../FitkitNutritionApi2EntityBase';
import type { FitkitNutritionApi2SDK } from '../FitkitNutritionApi2SDK';
import type { Control } from '../types';
import type { Robot, RobotLoadMatch } from '../FitkitNutritionApi2Types';
declare class RobotEntity extends FitkitNutritionApi2EntityBase<Robot> {
    constructor(client: FitkitNutritionApi2SDK, entopts: any);
    make(this: RobotEntity): RobotEntity;
    load(this: any, reqmatch?: RobotLoadMatch, ctrl?: Control): Promise<RobotEntity>;
}
export { RobotEntity };
