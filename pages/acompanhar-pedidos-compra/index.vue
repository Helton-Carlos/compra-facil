<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui';

const test = ref<StepperItem[]>([
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house'
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  },
  {
    title: 'Checkout',
    description: 'Confirm your order'
  }
])
</script>

<template>
  <div>
    <CFTitle
      title="Acompanhar Pedidos Compra"
      icon="i-lucide-banknote"
    />

    <div class="bg-black m-8 p-8">
      <UStepper :items="test" />
    </div>
  </div>
</template>
