<script setup lang="ts">
const primary = ref<string>('primary');
const secondary = ref<string>('secondary');

defineExpose({
  primary,
  secondary,
})
</script>

<template>
  <div>
    <h1>{{ primary }}</h1>
    <h1>{{ secondary }}</h1>
  </div>
</template>