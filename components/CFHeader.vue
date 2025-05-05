<script setup lang="ts">
import { useRoute } from 'vue-router';

const router = useRoute();

const activeConfig= computed<string>(()=>{
  return router.name === 'configuracao' ? 'text-green-500' : ''
})

const activeNotificacao = computed<string>(()=>{
  return router.name === 'notificacao' ? 'text-green-500' : ''
})
</script>

<template>
  <header class="w-full bg-black flex justify-end items-center py-4">
    <nav>
      <ul class="flex gap-7 mr-8">
        <NuxtLink to="/configuracao">
          <UIcon 
            name="i-lucide-cog"  
            :class="[activeConfig , 'size-5']"  
          />
        </NuxtLink>
        
        <NuxtLink to="/notificacao">
          <UIcon 
            name="i-lucide-bell-ring" 
            :class="[activeNotificacao , 'size-5']" 
          />
        </NuxtLink>
      </ul>
    </nav>
  </header>
</template>
