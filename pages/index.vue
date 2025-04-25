<script setup lang="ts">
import { cards } from '~/utils/dashboard';

definePageMeta({
  middleware: ['auth'],
});


</script>

<template>
  <div>
    <CFTitle />

    <div 
      class="flex gap-4 mt-4"
      v-for="item in cards"
      :key="item.title"
    >
      <Card 
        :title="item.title"
        :describe="item.describe"
        :icon= "item.icon"
        :path= "item.path"
      />
    </div>
  </div>
</template>
