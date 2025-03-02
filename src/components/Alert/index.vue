<template>
  <Teleport to="body">
    <div class="alert-container" v-if="visible">
      <div class="alert" :class="[`alert--${type}`, { 'is-dark': effect === 'dark' }]">
        <div class="alert-header" :class="[{ ['alert-align-center']: center }]">
          <div class="alert-header-icon" v-if="icon">
            <Icon icon="icon"></Icon>
          </div>
          <div class="alert-header-title">{{ message }}</div>
          <div class="alert-header-close" v-if="closeable">
            <div @click="handleClose">
              <Icon :icon="['fas', 'xmark']"></Icon>
            </div>
          </div>
        </div>
        <div class="alert-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../Icon/Icon.vue'
import './styles.css'
import type { AlertProps, AlertEvents, AlertInstance } from './types'

const emits = defineEmits<AlertEvents>()
const visible = ref(true)
const props = withDefaults(defineProps<AlertProps>(), {
  type: 'success',
  effect: 'light',
  closeable: true,
  icon: '',
  center: false,
  message: 'alert message'
})

const handleClose = () => {
  emits('close')
  visible.value = false
  props.onclose?.()
}
defineExpose<AlertInstance>({ close: handleClose })


</script>

<style scoped></style>
