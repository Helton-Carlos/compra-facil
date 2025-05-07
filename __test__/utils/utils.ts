import { vi } from 'vitest';

export const $fetch = vi.fn().mockImplementation(() => Promise.resolve(null));

export const back = vi.fn();

export const callHook = vi.fn();

export const hook = vi.fn();

export const defineNuxtPlugin = vi.fn().mockImplementation((callback: () => unknown) => callback);

export const defineNuxtRouteMiddleware = vi.fn().mockImplementation((callback: () => unknown) => callback);

export const definePageMeta = vi.fn();

export const navigateTo = vi.fn();

export const next = vi.fn();

export const onBeforeRouteLeave = vi.fn();

export const push = vi.fn();

export const refresh = vi.fn();

export const replace = vi.fn();

export const ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

export const saveAs = vi.fn();

export const scrollTo = vi.fn();

export const useFetch = vi.fn().mockImplementation(() => Promise.resolve({
  data: ref(null),
  error: ref(null),
}));

export const useLoadingIndicator = vi.fn().mockImplementation(() => ({
  start: () => callHook('page:start'),
  finish: () => callHook('page:finish'),
}));

export const useNuxtApp = vi.fn().mockImplementation(() => ({
  $v1: $fetch,
  $login: $fetch,
  $logout: $fetch,
  $units: $fetch,
  $manager: $fetch,
  callHook,
  hook,
}));

export const useRoute = vi.fn().mockImplementation(() => ({
  params: {},
  query: {},
}));

export const useRouter = vi.fn().mockImplementation(() => ({
  back,
  push,
  replace,
}));

export function delay(time: number = 100): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}