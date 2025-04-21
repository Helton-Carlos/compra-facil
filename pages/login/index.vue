<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui';
import type { FormState } from '~/types/login';

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

  console.log(event.data);
  await navigateTo('/');
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <UForm :validate="validate" :state="state" @submit="onSubmit">
      <div class="w-full flex flex-col items-center gap-4">
        <UFormField label="Email" name="email">
          <UInput
            v-model="state.email"
            placeholder="john@gmail.com"
            class="input"
          />
        </UFormField>

        <UFormField label="Password">
          <UInput
            v-model="state.password"
            placeholder="Password"
            :type="show ? 'text' : 'password'"
            :ui="{ trailing: 'pe-1' }"
            aria-describedby="password-strength"
            class="input"
          >
            <template #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                :aria-label="show ? 'Hide password' : 'Show password'"
                :aria-pressed="show"
                aria-controls="password"
                @click="show = !show"
              />
            </template>
          </UInput>
        </UFormField>

        <UButton class="btn" type="submit"> Submit </UButton>
      </div>
    </UForm>
  </div>
</template>
