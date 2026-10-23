package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewHealthzEntityFunc func(client *FitkitNutritionApi2SDK, entopts map[string]any) FitkitNutritionApi2Entity

var NewHomeGetEntityFunc func(client *FitkitNutritionApi2SDK, entopts map[string]any) FitkitNutritionApi2Entity

var NewRobotEntityFunc func(client *FitkitNutritionApi2SDK, entopts map[string]any) FitkitNutritionApi2Entity

var NewSitemapEntityFunc func(client *FitkitNutritionApi2SDK, entopts map[string]any) FitkitNutritionApi2Entity

var NewSitewebmanifestEntityFunc func(client *FitkitNutritionApi2SDK, entopts map[string]any) FitkitNutritionApi2Entity

var NewStaticAssetAssetGetEntityFunc func(client *FitkitNutritionApi2SDK, entopts map[string]any) FitkitNutritionApi2Entity

