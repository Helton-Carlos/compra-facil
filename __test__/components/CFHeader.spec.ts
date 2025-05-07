import { expect, describe, test } from 'vitest';
import { render, fireEvent } from '@testing-library/vue'
import { delay } from '../utils/utils'
import Header from '../../components/CFHeader.vue'

describe('Component Header', () => {
  test('Should test CFHeader', async () => {
    const wrapper = await render(Header);

    expect(wrapper).toBeDefined();
  })

  test('Should test configuracao', async () => {
    const wrapper = await render(Header);

    const configuracao = wrapper.getByTestId("header-configuracao");

    await fireEvent.click(configuracao);
  
    await delay();

    expect(configuracao).toBeDefined();
  })
})
