import type { Ref, InjectionKey } from "vue"
export type NameType = string | number
export interface ICollapseProps {
  modelValue: NameType[]
  accordion?: boolean
}
export interface ICollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}

export interface ICollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export interface ICollapseEmits {
  (e: "update:modelValue", value: NameType[]): void
  (e: "change", value: NameType[]): void
}

export const collapseContextKey: InjectionKey<ICollapseContext> =
  Symbol("collapseContextKey")
