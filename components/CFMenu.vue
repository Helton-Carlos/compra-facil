<script setup lang="ts">
import logo from '~/assets/image/logo-retangular.png';
import { menu } from '~/utils/menu';
import { useUserStore } from '~/stores/user'
import { useRoute } from 'vue-router'

const { logoff } = useUserStore();
const route = useRoute();
</script>

<template>
  <div class="bg-black w-[300px] h-lvh flex flex-col">
    <img :src="logo" alt="logo" class="w-[150px] py-10 mx-auto" >

    <nav class="font-semibold flex flex-col gap-5 pt-10">
      <ul v-for="items in menu" :key="items.name">
        <li>
          <nuxt-link
            :to="items.router"
            :class="{ 'text-green-500': route.name === items.router }"
            class="flex justify-center items-center py-1 gap-2 hover:text-green-500"
          >
            {{ items.name }}
            <UIcon :name="items.icon" class="size-5" />
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="font-semibold flex justify-center items-center mt-auto mb-8">
      <UButton
        size="md"
        icon="i-lucide-log-out"
        color="primary"
        variant="solid"
        class="px-8 cursor-pointer"
        @click="logoff()"
        >Sair</UButton
      >
    </div>
  </div>
</template>
