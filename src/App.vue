<script setup lang="ts">
import { ref, h } from 'vue'
import Button from "./components/Button/vkButton.vue"
import VkCollapse from './components/Collapse/vkCollapse.vue'
import VkCollapseItem from './components/Collapse/vkCollapseItem.vue'
import VkIcon from './components/Icon/Icon.vue'
import Alert from './components/Alert/index.vue'
import type { ButtonInstance } from "./components/Button/types"
import type { NameType } from './components/Collapse/types'
import Tooltip from './components/Tooltip/Tooltip.vue'
import type { TooltipInstance } from './components/Tooltip/types'
import Dropdown from './components/Dropdown/Dropdown'
import type { MenuOption } from './components/Dropdown/types'

const tooltipRef = ref<TooltipInstance | null>(null)
const buttonRef = ref<ButtonInstance | null>(null)
const openValue = ref<NameType[]>(['a'])
const handleAlertClose = () => {
  console.log('alert closed!')
}
const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const inlineConsole = (...args: any) => {
  console.log(...args)
}

const trigger = ref<any>('click')

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

    <Tooltip placement="right" ref="tooltipRef">
      <img src="./assets/logo.svg" alt="vue logo" class="logo" width="40" height="40">
      <template #content>
        <div>hello world</div>
      </template>
    </Tooltip>
    <Button @click="() => {
      tooltipRef?.show()
    }">open</Button>
    <Button @click="() => {
      tooltipRef?.hide()
    }">close</Button>

  </div>

  <div>
    <Dropdown placement="bottom" :trigger="trigger" :menu-options="options"
      @visible-change="e => inlineConsole('visible change', e)" @select="e => inlineConsole('select', e)">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </Dropdown>
  </div>
</template>

<style scoped></style>
