<?php
declare(strict_types=1);

// FitkitNutritionApi2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FitkitNutritionApi2MakeContext
{
    public static function call(array $ctxmap, ?FitkitNutritionApi2Context $basectx): FitkitNutritionApi2Context
    {
        return new FitkitNutritionApi2Context($ctxmap, $basectx);
    }
}
