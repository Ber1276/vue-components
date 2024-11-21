<script setup lang="ts">
import { ref } from 'vue'
import Button from "./components/Button/vkButton.vue";
import type { ButtonInstance } from "./components/Button/types"

const buttonRef = ref<ButtonInstance | null>(null)


</script>

<template>
  <div>
    <Button ref="buttonRef" type="primary" size="small" plain round circle>按钮</Button>
    <Button ref="buttonRef" type="success" size="medium" plain round circle>按钮</Button>
    <Button ref="buttonRef" type="warning" size="large" plain round circle>按钮</Button>
  </div>
</template>

<style scoped></style>
