import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/vue'
import App from './../app.vue'

describe('Component App', () => {
  test('Should test App', async () => {
    const wrapper = await render(App);

    expect(wrapper).toBeDefined();
  })
})
