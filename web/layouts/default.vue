<template>
  <div class="flex flex-row h-screen antialiased">
    <div class="flex flex-row flex-shrink-0">
      <div class="flex flex-col items-center py-2 flex-shrink-0 w-16 bg-primary-800">
        <router-link class="flex items-center justify-center h-8 w-8 rounded" to="/">
          <img alt="logo" src="/logo.png">
        </router-link>

        <ul class="flex flex-col space-y-2 mt-12">
          <li>
            <router-link class="flex items-center justify-center text-primary-100 hover:bg-primary-700 h-12 w-12 rounded" to="/create">
              <i class="fas fa-pencil-alt text-lg align-middle"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <transition name="slide-right">
        <template v-if="show">
          <div class="flex flex-col text-white px-4 py-2 items-center flex-shrink-0 w-80 bg-primary-400 hidden md:block">
            <div class="flex flex-row items-center">
              <div class="flex flex-row items-center">
                <div class="text-xl font-semibold">Messages</div>
                <div class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-secondary-500 rounded-full font-medium">5</div>
              </div>
            </div>
          </div>
        </template>
      </transition>
    </div>

    <div class="flex flex-col h-full w-full bg-white px-4 py-6">
      <!--
      <p-button @click="show = !show">Toggle</p-button>
      {{ $store.state.auth }}
      -->
      <nuxt/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PButton from '@/components/pplanner/PButton.vue'

@Component({
  components: {PButton},
})
export default class LayoutDefault extends Vue {
  public show: boolean = false
}
</script>
