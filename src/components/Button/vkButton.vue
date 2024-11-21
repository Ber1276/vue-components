<template>
  <button ref="_ref" class="vk-button" :class="{
    [`vk-button--${type}`]: type,
    [`vk-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
  }" :disabled="disabled" :type="nativeType" :autofocus="autofocus">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from "./types";
defineOptions({
  name: "vkButton",
})
withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
  size: "medium",
  plain: false,
  round: true,
  circle: false,
  disabled: false,
  nativeType: "button",
  autofocus: false,
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})


</script>

<style lang="scss" scoped>
.vk-button {
  border: var(--vk-border-width);
  font-size: var(--vk-font-size-normal);
  font-family: var(--vk-font-family-serif);
  text-align: center;
  color: var(--vk-font-color-light);
}

.vk-button {
  &--primary {
    background-color: var(--vk-color-primary);
  }

  &--success {
    background-color: var(--vk-color-success);
  }

  &--warning {
    background-color: var(--vk-color-warning);
  }

  &--danger {
    background-color: var(--vk-color-danger);
  }

  &--info {
    background-color: var(--vk-color-info);
  }
}

.vk-button {
  &--medium {
    padding: 4px 10px;
  }

  &--small {
    padding: 4px 6px;
  }

  &--large {
    padding: 4px 18px;
  }
}

.is-round {
  border-radius: var(--vk-border-radius);
}
</style>
