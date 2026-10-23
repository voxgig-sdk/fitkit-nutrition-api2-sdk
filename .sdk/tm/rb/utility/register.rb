# FitkitNutritionApi2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FitkitNutritionApi2Utility.registrar = ->(u) {
  u.clean = FitkitNutritionApi2Utilities::Clean
  u.clean_add = FitkitNutritionApi2Utilities::CleanAdd
  u.clean_explain = FitkitNutritionApi2Utilities::CleanExplain
  u.done = FitkitNutritionApi2Utilities::Done
  u.make_error = FitkitNutritionApi2Utilities::MakeError
  u.feature_add = FitkitNutritionApi2Utilities::FeatureAdd
  u.feature_hook = FitkitNutritionApi2Utilities::FeatureHook
  u.feature_init = FitkitNutritionApi2Utilities::FeatureInit
  u.fetcher = FitkitNutritionApi2Utilities::Fetcher
  u.make_fetch_def = FitkitNutritionApi2Utilities::MakeFetchDef
  u.make_context = FitkitNutritionApi2Utilities::MakeContext
  u.make_options = FitkitNutritionApi2Utilities::MakeOptions
  u.make_request = FitkitNutritionApi2Utilities::MakeRequest
  u.make_response = FitkitNutritionApi2Utilities::MakeResponse
  u.make_result = FitkitNutritionApi2Utilities::MakeResult
  u.make_point = FitkitNutritionApi2Utilities::MakePoint
  u.make_spec = FitkitNutritionApi2Utilities::MakeSpec
  u.make_url = FitkitNutritionApi2Utilities::MakeUrl
  u.param = FitkitNutritionApi2Utilities::Param
  u.prepare_auth = FitkitNutritionApi2Utilities::PrepareAuth
  u.prepare_body = FitkitNutritionApi2Utilities::PrepareBody
  u.prepare_headers = FitkitNutritionApi2Utilities::PrepareHeaders
  u.prepare_method = FitkitNutritionApi2Utilities::PrepareMethod
  u.prepare_params = FitkitNutritionApi2Utilities::PrepareParams
  u.prepare_path = FitkitNutritionApi2Utilities::PreparePath
  u.prepare_query = FitkitNutritionApi2Utilities::PrepareQuery
  u.graphql_body = FitkitNutritionApi2Utilities::GraphqlBody
  u.graphql_errors = FitkitNutritionApi2Utilities::GraphqlErrors
  u.result_basic = FitkitNutritionApi2Utilities::ResultBasic
  u.result_body = FitkitNutritionApi2Utilities::ResultBody
  u.result_headers = FitkitNutritionApi2Utilities::ResultHeaders
  u.transform_request = FitkitNutritionApi2Utilities::TransformRequest
  u.transform_response = FitkitNutritionApi2Utilities::TransformResponse
}
