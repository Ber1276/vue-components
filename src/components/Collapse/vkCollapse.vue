<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, provide, watch } from 'vue'
import type { ICollapseProps, NameType, ICollapseEmits } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: "VkCollapse"
})
const props = defineProps<ICollapseProps>()
const emits = defineEmits<ICollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one active item')
}
const handleItemClick = (name: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === name ? '' : name]
  }
  else {
    const index = activeNames.value.indexOf(name)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(name)
    }
    emits('update:modelValue', activeNames.value)
    emits('change', activeNames.value)
  }

}
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>
<style lang="scss" scoped>
@use './styles.scss';
</style>
