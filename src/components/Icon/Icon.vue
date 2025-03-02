<template>
  <i class="vk-icon" :class="{
    [`vk-icon--${type}`]: type,
  }" v-bind="$attrs">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type { IconProps } from './types'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import './style.css'
defineOptions({
  name: "VkIcon",
  inheritAttrs: false,
})
const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
</script>

<style scoped></style>
