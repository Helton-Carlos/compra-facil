<script setup lang="ts">
import type { menu } from '~/types/menu'

const menu = ref<menu[]>([
  { 
    name: 'Empresas', 
    router: 'empresas' 
  },
  { 
    name: 'Compras', 
    router: 'compras' 
  },
  { 
    name: 'Dividas', 
    router: 'dividas' 
  },
  { 
    name: 'Estoque', 
    router: 'estoque' 
  },
])
</script>

<template>
  <div
    class="bg-black w-[300px] h-lvh pt-10"
  >
    <nav class="text-center font-semibold flex flex-col gap-5 pt-10">
      <ul 
        v-for="items in menu" :key="items.name"
      >
        <li>
          <nuxt-link 
            :to="items.router"
            class="hover:text-green-500"
          >  
            {{ items.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
