# FitkitNutritionApi2 SDK utility: make_context
require_relative '../core/context'
module FitkitNutritionApi2Utilities
  MakeContext = ->(ctxmap, basectx) {
    FitkitNutritionApi2Context.new(ctxmap, basectx)
  }
end
