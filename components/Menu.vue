<script setup lang="ts">
import { menu } from '~/utils/menu';

const { logoff } = useUserStore();
const route = useRoute();
</script>

<template>
  <div class="bg-black w-[300px] h-lvh flex flex-col">
    <h1 class="text-2xl text-green-500 text-center font-semibold pt-4 pb-10">
      Compra Fácil <UIcon name="i-lucide-badge-plus" class="size-5" />
    </h1>

    <nav class="font-semibold flex flex-col gap-5 pt-10">
      <ul v-for="items in menu" :key="items.name">
        <li>
          <nuxt-link
            :to="items.router"
            :class="{'text-green-500' : route.name === items.router}"
            class="flex justify-center items-center py-1 gap-2 hover:text-green-500"
          >
            {{ items.name }}
            <UIcon :name="items.icon" class="size-5" />
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <button 
      class="font-semibold flex justify-center items-center gap-2 mt-auto mb-8 hover:text-green-500 cursor-pointer"
      @click="logoff()"
    >
      Sair<UIcon name="i-lucide-log-out" class="size-5" />
    </button>
  </div>
</template>
