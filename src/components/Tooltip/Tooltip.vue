<template>
  <div>
    <div class="vk-tooltip" v-on="events" ref="popperContainerNode">
      <div class="vk-tooltip__trigger" ref="triggerNode" v-on="clickEvents">
        <slot></slot>
      </div>
      <Transition :name="transition">
        <div class="vk-tooltip__popper" ref="popperNode" v-if="isOpen">
          <slot name="content">
            {{ content }}
          </slot>
          <div id="arrow" data-popper-arrow></div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from "vue"
import { createPopper, type Instance as PopperInstance } from "@popperjs/core"
import { debounce } from "lodash-es"
import type { TooltipProps, TooltipEmits, TooltipInstance } from "./types"
import useClickOutside from "@/hooks/useClickOutside"
import './styles.css'


const props = withDefaults(defineProps<TooltipProps>(), {
  placement: "bottom",
  trigger: "hover",
  transition: 'fade',
  openDelay: 0,
  closeDelay: 0,
})
const emits = defineEmits<TooltipEmits>()



const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
let popperInstance: null | PopperInstance = null
let events: Record<string, any> = reactive({})
const clickEvents: Record<string, any> = reactive({})
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    ...props.popperOptions
  }
})
const openn = () => {
  isOpen.value = true
  emits("visible-change", true)
}
const close = () => {
  isOpen.value = false
  emits("visible-change", false)
}
const openDebaounced = debounce(openn, props.openDelay)
const closeDebaounced = debounce(close, props.closeDelay)
const openFinal = () => {
  closeDebaounced.cancel()
  openDebaounced()
}
const closeFinal = () => {
  openDebaounced.cancel()
  closeDebaounced()
}


const togglePopper = () => {
  if (isOpen.value) {
    closeFinal()
  } else {
    openFinal()
  }
}
const attachEvents = () => {
  if (props.trigger !== "click") {
    events.mouseenter = openFinal
    events.mouseleave = closeFinal
  } else {
    clickEvents.click = togglePopper
  }
}


useClickOutside(popperContainerNode, () => {
  if (props.trigger === "click" && isOpen.value && !props.manual) {
    isOpen.value = false
  }
})

watch(() => props.manual, (isManual) => {
  if (isManual) {
    events = {}
  } else {
    attachEvents()
  }
})
watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if (newTrigger !== oldTrigger) {
    events = {}
    attachEvents()
  }
})
watch(isOpen, (val) => {
  if (val) {
    if (popperNode.value && triggerNode.value) {
      popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
    } else {
      popperInstance?.destroy()
    }
  }
}, { flush: 'post' })



if (!props.manual) {
  attachEvents()
}
onUnmounted(() => {
  popperInstance?.destroy()
})
defineExpose<TooltipInstance>({
  'show': openFinal,
  'hide': closeFinal,
})
</script>

<style scoped></style>
