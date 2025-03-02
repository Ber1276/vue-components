import { describe, test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Collapse from "./vkCollapse.vue"
import CollapseItem from "./vkCollapseItem.vue"
describe("Collapse test", () => {
  test("basic collapse", () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={["a"]}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="title c">
            content c
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ["CollapseItem"],
        },
      },
    )
    const headers = wrapper.findAll(".vk-collapse-item__header")
    const contents = wrapper.findAll(".vk-collapse-item__content")
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    const firstHeader = headers[0]
    expect(firstHeader.text()).toBe("title a")
    const firstContent = contents[0]
    expect(firstContent.text()).toBe("content a")
  })
})
