import { expect, describe, test } from 'vitest';
import { render, fireEvent } from '@testing-library/vue'
import Card from '../../components/CFCard.vue'

describe('Component CFCard', () => {
  const props = {
    title: "Requisição de compra",
    describe: "Requerimento, solicitação ou pedido",
    icon: "i-lucide-shopping-cart",
    path: "/requisicao-compra",
  };

  test('Should test CFCard', async () => {
    const card = await render(Card, {
      props: props
    });

    expect(card).toBeDefined();
  })

  test('Should test path', async () => {
    const card = await render(Card, {
      props: props
    });

    const path = card.getByTestId("card");

    fireEvent.click(path)
   
    expect(path).toBeTruthy();
  })
})
