<script setup lang="ts"></script>

<template>
  <div class="flex">
    <CFMenu />

    <div class="w-full">
      <CFHeader />
      
      <div class="mt-8 mx-10">
        <slot />
      </div>
    </div>
  </div>
</template>
