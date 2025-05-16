import { vi } from 'vitest';
import { ref } from 'vue';

// Mockando funções relacionadas ao fetch e outras funções do Nuxt
export const $fetch = vi.fn().mockResolvedValue(null);
export const back = vi.fn();
export const callHook = vi.fn();
export const hook = vi.fn();
export const defineNuxtPlugin = vi.fn((cb: () => unknown) => cb());
export const defineNuxtRouteMiddleware = vi.fn((cb: () => unknown) => cb());
export const definePageMeta = vi.fn();
export const next = vi.fn();
export const onBeforeRouteLeave = vi.fn();

// Mockando ResizeObserver
export const ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mockando saveAs e scrollTo
export const saveAs = vi.fn();
export const scrollTo = vi.fn();

// Mockando useFetch para testar operações assíncronas
export const useFetch = vi.fn().mockResolvedValue({
  data: ref(null),
  error: ref(null),
});

// Mockando indicador de carregamento
export const useLoadingIndicator = vi.fn(() => ({
  start: () => callHook('page:start'),
  finish: () => callHook('page:finish'),
}));

// Mockando funções relacionadas ao Nuxt
export const useNuxtApp = vi.fn(() => ({
  $cf: $fetch,
  callHook,
  hook,
}));

// Mockando useRoute e useRouter
export const navigateTo = vi.fn();
export const push = vi.fn();
export const refresh = vi.fn();
export const replace = vi.fn();

vi.mock('vue-router', async () => ({
  useRoute: vi.fn(() => ({
    params: {},
    query: {},
  })),
  useRouter: vi.fn(() => ({
    back,
    push,
    replace,
  })),
}));

// Mockando useUserStore
vi.mock('~/stores/user', () => ({
  useUserStore: vi.fn(() => ({
    logoff: vi.fn(),
  })),
}));

// Função utilitária para delays
export function delay(time: number = 100): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, time));
}



