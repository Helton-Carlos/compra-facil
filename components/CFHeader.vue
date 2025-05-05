<script setup lang="ts"></script>

<template>
  <header class="w-full bg-black flex justify-end items-center py-4">
    <nav>
      <ul class="flex gap-4 mr-8">
        <NuxtLink to="/configuracao">
          <UIcon name="i-lucide-cog" class="size-5" />
        </NuxtLink>
        <NuxtLink to="/notificacao">
          <UIcon name="i-lucide-bell-ring" class="size-5" />
        </NuxtLink>
      </ul>
    </nav>
  </header>
</template>
