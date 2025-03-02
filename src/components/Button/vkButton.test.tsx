import { describe, test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Button from "./vkButton.vue"
import Icon from "../Icon/Icon.vue"
describe("button test", () => {
  test("icon test", () => {
    const wrapper = mount(Button, {
      props: {
        icon: "fas-arrow-right",
        disable: true,
      },
      global: {
        stubs: ["Icon"],
      },
    })
    expect(wrapper.findComponent(Icon).exists()).toBe(true)
    expect(wrapper.findComponent(Icon).attributes("icon")).toBe(
      "fas-arrow-right",
    )
    expect(wrapper.attributes("disable")).toBeDefined()
  })
})
