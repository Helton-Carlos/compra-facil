import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/vue'
import Card from '../../components/CFCard.vue'

describe('Component CFCard', () => {
  test('Should test CFCard', async () => {
    const component = render(Card);

    expect(component).toBeDefined();
  })
})
