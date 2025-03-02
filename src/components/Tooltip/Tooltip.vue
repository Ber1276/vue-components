<template>
  <div>
    <div class="vk-tooltip" v-on="events">
      <div class="vk-tooltip__trigger" ref="triggerNode">
        <slot></slot>
      </div>
      <div class="vk-tooltip__popper" ref="popperNode" v-if="isOpen">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from "vue"
import { createPopper, type Instance as PopperInstance } from "@popperjs/core"
import type { TooltipProps, TooltipEmits } from "./types"
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: "bottom",
  trigger: "hover",
})
const emits = defineEmits<TooltipEmits>()


const isOpen = ref(false)
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits("visible-change", isOpen.value)
}

const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
let popperInstance: null | PopperInstance = null

const events: Record<string, any> = reactive({})
const attachEvents = () => {
  if (props.trigger === "click") {
    events.click = togglePopper
  } else {
    events.mouseenter = () => {
      isOpen.value = true
    }
    events.mouseleave = () => {
      isOpen.value = false
    }
  }
  Object.keys(events).forEach((event) => {
    triggerNode.value?.addEventListener(event, events[event])
  })
}
watch(isOpen, (val) => {
  if (val) {
    if (popperNode.value && triggerNode.value) {
      popperInstance = createPopper(triggerNode.value, popperNode.value, {
        placement: props.placement,
      })
    } else {
      popperInstance?.destroy()
    }
  }
}, { flush: 'post' })
attachEvents()
</script>

<style scoped>
.vk-tooltip {
  width: fit-content;
}
</style>
