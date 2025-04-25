<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <div class="flex items-center gap-1">
    <CFTitle />
  </div>
</template>
