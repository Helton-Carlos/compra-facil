<script setup lang="ts">
import { cards } from '~/utils/dashboard';

definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <div>
    <CFTitle
      title="Dashboard"
      icon="i-lucide-album"
    />

    <div class="flex flex-wrap gap-4 mt-4">
      <div  
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
  </div>
</template>
