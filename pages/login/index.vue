<script setup lang="ts">
import logo from '~/assets/image/logo-retangular.png';
import type { FormError, FormSubmitEvent } from '@nuxt/ui';
import type { FormState } from '~/types/login';

const { login } = useUserStore();

const toast = useToast();
const show = ref<boolean>(false);

const state = reactive<FormState>({
  email: undefined,
  password: undefined,
});

const validate = (state: FormState): FormError[] => {
  const errors: FormError[] = [];

  if (!state.email) {
    errors.push({ name: 'email', message: 'Required' });
  }

  if (!state.password) {
    errors.push({ name: 'password', message: 'Required' });
  }

  return errors;
};

async function onSubmit(event: FormSubmitEvent<FormState>) {
  toast.add({
    title: 'Aguarde!',
    description: 'Seus dados estão sendo carregados...',
    color: 'success',
  });

  await login(event.data);
}

definePageMeta({
  layout: 'login',
});

useHead({
  title: 'Compra fácil | Login',
  meta: [
    {
      name: 'Compra fácil | Login',
      content: 'Compra fácil',
    },
  ],
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <UForm :validate="validate" :state="state" @submit="onSubmit">
      <div class="w-full flex flex-col items-center gap-4">
        <img :src="logo" alt="logo" class="w-[250px]" >

        <UFormField label="Email" name="email">
          <UInput
            v-model="state.email"
            placeholder="john@gmail.com"
            class="input"
          />
        </UFormField>

        <UFormField label="Password" name="password">
          <div class="relative w-full">
            <UInput
              v-model="state.password"
              placeholder="Password"
              :type="show ? 'text' : 'password'"
              class="input pr-10"
            />
            <UButton
              class="absolute right-2 top-1/2 -translate-y-1/2"
              color="neutral"
              variant="link"
              size="sm"
              :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="show ? 'Hide password' : 'Show password'"
              :aria-pressed="show"
              aria-controls="password"
              @click="show = !show"
            />
          </div>
        </UFormField>

        <UButton class="btn" type="submit">Submit</UButton>
      </div>
    </UForm>
  </div>
</template>

