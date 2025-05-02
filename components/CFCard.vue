<script setup lang="ts">
defineProps<{
  title: string,
  describe: string,
  icon: string,
  path: string,
}>();
</script>

<template>
  <nuxt-link 
    :to="path"
    class="card"
  >
   <div>
      <h4 class="font-bold">{{ title }}</h4>
      <p>{{ describe }}</p>
   </div>
   <div>
    <UIcon :name="icon" class="size-5" />
   </div>
  </nuxt-link>
</template>
