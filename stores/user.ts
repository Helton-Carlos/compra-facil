import { useStorage } from '@vueuse/core';
import type { FormState } from '~/types/login';

export const useUserStore = defineStore('user', () => {
  const localUserName = 'CF-USER';

  async function login(user: FormState) {
    const { email } = user;

    await useStorage(localUserName, email, localStorage);
  }

  function getStorage() {
    localStorage.getItem(localUserName || null);
  }

  function logoff() {
    localStorage.removeItem(localUserName);
  }

  return {
    login,
    getStorage,
    logoff,
  }
})