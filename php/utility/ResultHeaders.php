<?php
declare(strict_types=1);

// FitkitNutritionApi2 SDK utility: result_headers

class FitkitNutritionApi2ResultHeaders
{
    public static function call(FitkitNutritionApi2Context $ctx): ?FitkitNutritionApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
