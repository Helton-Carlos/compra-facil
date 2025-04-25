<script setup lang="ts"></script>

<template>
  <div class="flex">
    <Menu />

    <div class="w-full">
      <CFHeader />
      
      <div class="mt-8 ml-10">
        <slot />
      </div>
    </div>
  </div>
</template>
