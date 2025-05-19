import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/vue'
import Default from '~/layouts/default.vue'

describe('Component Layout Default', () => {
  test('Should test layout default', async () => {
    const wrapper = await render(Default);

    expect(wrapper).toBeDefined();
  })
})
