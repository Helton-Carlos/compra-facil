<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <div>
    <h3 class="text-2xl flex items-center gap-2 capitalize font-bold">
      {{ title }}
      <UIcon
        :name="icon"
        class="size-5"
      />
    </h3>
  </div>
</template>
