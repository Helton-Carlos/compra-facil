<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <div class="flex items-center gap-1">
    <h1>menu</h1>
    <UIcon name="i-lucide-lightbulb" class="size-5" />
  </div>
</template>
