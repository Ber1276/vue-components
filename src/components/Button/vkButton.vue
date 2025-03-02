<template>
  <button ref="_ref" class="vk-button" :class="{
    [`vk-button--${type}`]: type,
    [`vk-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
  }" :disabled="disabled || loading" :type="nativeType" :autofocus="autofocus">
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { ButtonProps } from "./types"
defineOptions({
  name: "VkButton",
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
@import './style.css'
</style>
