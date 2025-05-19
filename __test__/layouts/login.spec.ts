import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/vue'
import Login from '~/layouts/login.vue'

describe('Component Layout Login', () => {
  test('Should test layout Login', async () => {
    const wrapper = await render(Login);

    expect(wrapper).toBeDefined();
  })
})
