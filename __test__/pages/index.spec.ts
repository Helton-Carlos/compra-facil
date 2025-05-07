import { expect, describe, test } from 'vitest';
import { render, fireEvent } from '@testing-library/vue'
import Dashboard from '~/pages/index.vue'

describe('Component Dashboard', () => {
  jest.mock("#imports", () => ({
    definePageMeta: (meta: any) => {},
  }));

  test('Should test Dashboard', async () => {
    const card = await render(Dashboard);

    expect(card).toBeDefined();
  })
})
