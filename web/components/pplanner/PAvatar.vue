<template>
  <div class="p-avatar">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class PAvatar extends Vue {

}
</script>
