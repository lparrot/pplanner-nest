<template>
  <component :is="tag" v-bind="$attrs" v-on="$listeners" :class="[variant, {'flat': flat}]" :disabled="disabled" class="p-button">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class PButton extends Vue {
  @Prop({type: Boolean}) disabled!: boolean
  @Prop({type: Boolean}) flat!: boolean
  @Prop({type: String, default: 'button'}) tag!: string
  @Prop({type: String, default: 'primary'}) variant !: string
}
</script>
