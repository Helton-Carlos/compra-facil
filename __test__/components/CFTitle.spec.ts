import { expect, describe, test } from 'vitest';
import { render } from '@testing-library/vue'
import CFTitle from '~/components/CFTitle.vue'

describe('Component CFTitle', () => {
  const props = {
    title: "Requisição de compra",
    icon: "i-lucide-shopping-cart",
  };

  test('Should test CFTitle', async () => {
    const card = await render(CFTitle, {
      props: props
    });

    expect(card).toBeDefined();
  })
})
