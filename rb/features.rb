# FitkitNutritionApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FitkitNutritionApi2Features
  def self.make_feature(name)
    case name
    when "base"
      FitkitNutritionApi2BaseFeature.new
    when "ratelimit"
      FitkitNutritionApi2RatelimitFeature.new
    when "retry"
      FitkitNutritionApi2RetryFeature.new
    when "test"
      FitkitNutritionApi2TestFeature.new
    when "timeout"
      FitkitNutritionApi2TimeoutFeature.new
    else
      FitkitNutritionApi2BaseFeature.new
    end
  end
end
