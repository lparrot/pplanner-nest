<template>
  <div>
    <h2> Edit User </h2>
    <form id='create-post-form' class="flex flex-col" @submit.prevent='editUser'>
      <div class='form-group w-1/2'>
        <label for='first_name'> First Name </label>
        <input id='first_name' v-model='user.first_name' class='form-control' name='first_name' placeholder='Enter firstname' type='text'>
      </div>
      <div class='form-group w-1/2'>
        <label for='last_name'> Last Name </label>
        <input id='last_name' v-model='user.last_name' class='form-control' name='last_name' placeholder='Enter Last name' type='text'>
      </div>
      <div class='form-group w-1/2'>
        <label for='email'> Email </label>
        <input id='email' v-model='user.email' class='form-control' name='email' placeholder='Enter email' type='text'>
      </div>
      <div class='form-group w-1/2'>
        <label for='phone_number'> Phone </label>
        <input id='phone_number' v-model='user.phone' class='form-control' name='phone_number' placeholder='Enter Phone number' type='text'>
      </div>
      <div class='form-group w-1/2'>
        <label for='address'> Address </label>
        <input id='address' v-model='user.address' class='form-control' name='address' placeholder='Enter Address' type='text'>
      </div>
      <div class='form-group col-md-4 pull-right'>
        <p-button type='submit'> Edit User</p-button>
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'nuxt-property-decorator';

import PButton from "~/components/pplanner/PButton.vue";

@Component({
  components: {PButton}
})
export default class UserEdit extends Vue {
  public id: string = null;
  public user: any = {};

  async created() {
    this.id = this.$route.params.id;
    await this.getUser();
  }

  async editUser() {
    let userData = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      email: this.user.email,
      phone: this.user.phone,
      address: this.user.address,
      description: this.user.description,
    };

    await this.$axios.$put(`/user?id=${this.id}`, userData);

    this.$emit('on-finish');
  }

  async getUser() {
    this.user = await this.$axios.$get(`/user/${this.id}`);
  }
}
</script>
