# FitkitNutritionApi2 SDK exists test

import pytest
from fitkitnutritionapi2_sdk import FitkitNutritionApi2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FitkitNutritionApi2SDK.test(None, None)
        assert testsdk is not None
