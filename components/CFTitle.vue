<script setup lang="ts">
import { menu } from '~/utils/menu';

const { name } = useRoute();

const menuIcon = computed(()=>{
 return menu.filter(({router})=> router === name)
})
</script>

<template>
  <div>
    <h3 class="text-2xl flex items-center gap-2 uppercase font-bold">  
      {{ name === 'dividas' ? 'dívidas' :  name }}
      <UIcon :name="menuIcon[0].icon" class="size-5" />
    </h3>
  </div>
</template>
