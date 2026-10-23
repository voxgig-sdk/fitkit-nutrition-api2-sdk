
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FitkitNutritionApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FitkitNutritionApi2SDK.test()
    equal(testsdk instanceof FitkitNutritionApi2SDK, true,
      'FitkitNutritionApi2SDK.test() must return a client synchronously')
  })

})
