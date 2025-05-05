import { expect, describe, test } from 'vitest';
import Card from '~/components/CFCard.vue';

describe('CFCard testing', () => {
  test('init component', async () => {
    const wapper = await Card;

    expect(wapper).toBeDefined();
  })
})