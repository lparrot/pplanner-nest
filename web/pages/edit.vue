<template>
  <UserEdit @on-finish="$router.push('/')"/>
</template>
<script>
import { Component, Vue } from 'nuxt-property-decorator'
import UserEdit from '@/components/UserEdit.vue'

@Component({
  components: { UserEdit },
})
export default class PageEdit extends Vue {}
</script>
