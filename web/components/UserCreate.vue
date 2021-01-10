<template>
  <div>
    <div class='col-md-12 form-wrapper'>
      <h2> Create User </h2>
      <form id='create-post-form' @submit.prevent='createUser'>
        <div class='form-group col-md-12'>
          <label for='first_name'> First Name </label>
          <input id='first_name' v-model='first_name' class='form-control' name='first_name' placeholder='Enter firstname' type='text'>
        </div>
        <div class='form-group col-md-12'>
          <label for='last_name'> Last Name </label>
          <input id='last_name' v-model='last_name' class='form-control' name='last_name' placeholder='Enter Last name' type='text'>
        </div>
        <div class='form-group col-md-12'>
          <label for='email'> Email </label>
          <input id='email' v-model='email' class='form-control' name='email' placeholder='Enter email' type='text'>
        </div>
        <div class='form-group col-md-12'>
          <label for='phone_number'> Phone </label>
          <input id='phone_number' v-model='phone' class='form-control' name='phone' placeholder='Enter Phone number' type='text'>
        </div>
        <div class='form-group col-md-12'>
          <label for='address'> Address </label>
          <input id='address' v-model='address' class='form-control' name='address' placeholder='Enter Address' type='text'>
        </div>
        <div class='form-group col-md-4 pull-right'>
          <button class='btn btn-success' type='submit'> Create User</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'nuxt-property-decorator';

@Component
export default class UserCreate extends Vue {
  public first_name: string = null;
  public last_name: string = null;
  public email: string = null;
  public phone: string = null;
  public address: string = null;

  async createUser() {
    let userData = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone: this.phone,
      address: this.address,
    };

    await this.$axios.$post(`/user`, userData);

    this.$emit('on-finish');
  }
}
</script>
