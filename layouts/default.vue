<script setup lang="ts"></script>

<template>
  <div>
    <CFHeader />
    <div class="flex gap-4 pt-10">
      <Menu />
      
      <div class="mt-10 ml-2">
        <slot />
      </div>
    </div>
  </div>
</template>
