<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import 'altcha';

const props = defineProps<{
  payload: string
}>();

const emit = defineEmits<{
  (e: 'update:payload', value: string): void;
}>();

const altchaWidget = ref<HTMLElement | null>(null);
const internalValue = ref(props.payload);

function onStateChange (ev: CustomEvent | Event) {
  if ('detail' in ev) {
    const { payload, state } = ev.detail;
    if (state === 'verified' && payload) {
      internalValue.value = payload;
    } else {
      internalValue.value = '';
    }
  }
};

onMounted(() => {
  if (altchaWidget.value) {
    altchaWidget.value.addEventListener('statechange', onStateChange);
  }
});

onUnmounted(() => {
  if (altchaWidget.value) {
    altchaWidget.value.removeEventListener('statechange', onStateChange);
  }
});

watch(internalValue, (v) => {
  emit('update:payload', v || '');
});
</script>

<template>
  <altcha-widget
    ref="altchaWidget"
    style="--altcha-max-width:100%"
    debug
    test
  />
</template>