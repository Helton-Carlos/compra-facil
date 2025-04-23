import { useStorage } from '@vueuse/core';
import type { FormState } from '~/types/login';

export const useUserStore = defineStore('user', () => {
  const localUserName = 'CF-USER';
  
  const user = ref<string | undefined>('');

  async function login(form: FormState) {
    const { email } = form;

    user.value = email;

    await useStorage(localUserName, email, localStorage);
  }

  function logoff() {
    localStorage.removeItem(localUserName) 
  }

  return {
    user,
    login,
    logoff,
  }
})