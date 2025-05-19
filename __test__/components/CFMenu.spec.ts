import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';
import Menu from '~/components/CFMenu.vue';

describe('Component CFMenu', () => {
  test('Should render CFMenu component', async () => {
    const wrapper = await render(Menu, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper).toBeDefined();
  });

  test('Should call logoff when clicking logout menu item', async () => {
    const { useUserStore } = await import('~/stores/user');
    const store = useUserStore();
    
    store.logoff = vi.fn(); 

    const wrapper = await render(Menu, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
      },
    });

    const logoutButton = wrapper.getByText('Sair'); 
    
    await fireEvent.click(logoutButton);

    waitFor(() => expect(store.logoff).toHaveBeenCalled());
  });
});
