<script setup lang="ts">
import { ref } from 'vue'
import Button from "./components/Button/vkButton.vue"
import VkCollapse from './components/Collapse/vkCollapse.vue'
import VkCollapseItem from './components/Collapse/vkCollapseItem.vue'
import VkIcon from './components/Icon/Icon.vue'
import Alert from './components/Alert/index.vue'
import type { ButtonInstance } from "./components/Button/types"
import type { NameType } from './components/Collapse/types'
import Tooltip from './components/Tooltip/Tooltip.vue'

const buttonRef = ref<ButtonInstance | null>(null)
const openValue = ref<NameType[]>(['a'])
const handleAlertClose = () => {
  console.log('alert closed!')
}


</script>

<template>
  <div>

    <Button ref="buttonRef" type="primary" size="small" round>按钮</Button>
    <Button ref="buttonRef" type="success" size="medium" plain>按钮</Button>
    <Button ref="buttonRef" type="warning" size="large" circle>按钮</Button>
    <Button ref="buttonRef" type="warning" loading size="large">按钮</Button>

  </div>
  <div>
    <VkCollapse v-model="openValue" @change="() => { console.log(openValue) }">
      <VkCollapseItem name="a">
        <template #title>
          hello 111
        </template>
        <template #default>
          我是第一个内容
        </template>
      </VkCollapseItem>
      <VkCollapseItem name="b" title="nice b"></VkCollapseItem>
      <VkCollapseItem name="c" title="nice ccc" disabled></VkCollapseItem>
    </VkCollapse>
    {{ openValue }}

  </div>
  <div>
    <VkIcon :icon="['fas', 'arrow-up']" size="3x" type="danger" />
  </div>
  <div>
    <Alert message="hello!" @close="handleAlertClose" center></Alert>
    <Alert message="hello again!" @close="handleAlertClose"></Alert>
    <Alert message="hello again!" type="error"></Alert>
  </div>

  <div>

    <Tooltip content="hello word" placement="right">
      <img src="./assets/logo.svg" alt="vue logo" class="logo" width="40" height="40">
      <template #content>
        <div>hello world</div>
      </template>
    </Tooltip>


  </div>
</template>

<style scoped></style>
