<template>
  <div class="flex justify-center">
    <form class="flex-col w-1/2" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username"> Username </label>
        <input id="username" v-model="form.username" class="form-control" placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="password"> Password </label>
        <input id="password" v-model="form.password" class="form-control" placeholder="Enter password" type="password">
      </div>
      <button class="p-button primary w-full" type="submit">Valider</button>
    </form>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class PageLogin extends Vue {
  public form = {username: '', password: null}

  async handleSubmit() {
    try {
      await this.$auth.loginWith('local', {data: this.form})
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
