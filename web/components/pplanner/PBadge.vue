<template>
  <div :class="classes" :style="activeColors" class="p-badge">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class PBadge extends Vue {
  @Prop({type: Boolean}) link!: boolean
  @Prop({default: 'primary'}) color!: string
  @Prop({default: 'white'}) textColor!: string

  get classes() {
    const classes = []
    if (this.link) {
      classes.push('cursor-pointer')
    }
    classes.push(`bg-${this.color}-600 hover:bg-${this.color}-400`)
    classes.push(`text-${this.textColor}`)
    return classes
  }
}
</script>
