# FitkitNutritionApi2 SDK utility: make_context

from projectname_sdk.core.context import FitkitNutritionApi2Context


def make_context_util(ctxmap, basectx):
    return FitkitNutritionApi2Context(ctxmap, basectx)
