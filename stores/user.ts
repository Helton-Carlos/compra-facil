import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import type { FormState } from '~/types/login';
import { ref } from 'vue';
import { navigateTo } from '#app';

export const useUserStore = defineStore('user', () => {
  const localUserName = 'CF-USER';
  const user = ref<string | undefined>(undefined);

  async function login(form: FormState) {
    const { email } = form;

    user.value = email;
    
    await useStorage(localUserName, email, localStorage);
    
    return navigateTo('/')
  }

  function logoff() {
    localStorage.removeItem(localUserName);
    return navigateTo('/login')
  }

  return {
    user,
    login,
    logoff,
  }
})