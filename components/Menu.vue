<script setup lang="ts">
import { menu } from '~/utils/menu';

const route = useRoute();
</script>

<template>
  <div class="bg-black w-[300px] h-lvh pt-10">
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
  </div>
</template>
