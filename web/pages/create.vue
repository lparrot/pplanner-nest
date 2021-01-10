<template>
  <UserCreate @on-finish="$router.push('/')"/>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

import UserCreate from '@/components/UserCreate.vue'

@Component({
  components: {UserCreate},
})
export default class PageCreate extends Vue {
}
</script>
