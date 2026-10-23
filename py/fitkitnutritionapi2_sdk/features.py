# FitkitNutritionApi2 SDK feature factory

from fitkitnutritionapi2_sdk.feature.base_feature import FitkitNutritionApi2BaseFeature
from fitkitnutritionapi2_sdk.feature.ratelimit_feature import FitkitNutritionApi2RatelimitFeature
from fitkitnutritionapi2_sdk.feature.retry_feature import FitkitNutritionApi2RetryFeature
from fitkitnutritionapi2_sdk.feature.test_feature import FitkitNutritionApi2TestFeature
from fitkitnutritionapi2_sdk.feature.timeout_feature import FitkitNutritionApi2TimeoutFeature


_FEATURES = {
    "base": lambda: FitkitNutritionApi2BaseFeature(),
    "ratelimit": lambda: FitkitNutritionApi2RatelimitFeature(),
    "retry": lambda: FitkitNutritionApi2RetryFeature(),
    "test": lambda: FitkitNutritionApi2TestFeature(),
    "timeout": lambda: FitkitNutritionApi2TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
