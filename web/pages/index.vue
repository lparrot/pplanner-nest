<template>
  <div class="container-fluid">
    <transition appear name="tracking-in-expand">
      <div class="text-center">
        <h1>Nest User List App Tutorial</h1>
        <p>Built with Nest.js, Vue.js and MongoDB</p>
        <div v-if="users.length === 0">
          <h2>No user found at the moment</h2>
        </div>
      </div>
    </transition>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
        <tr>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.address }}</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" style="margin-bottom: 20px">
                <router-link
                  :to="{ name: 'edit', params: { id: user._id } }"
                  class="btn btn-sm btn-outline-secondary"
                >Edit User
                </router-link
                >
                <button
                  class="btn btn-sm btn-outline-secondary"
                  @click="deleteUser(user._id)"
                >
                  Delete User
                </button>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class PageIndex extends Vue {
  public users: any[] = [];

  async created() {
    await this.fetchUsers();
  }

  async fetchUsers() {
    this.users = await this.$axios.$get(`/user`);
  }

  async deleteUser(id) {
    const res = await this.$axios.$delete(`/user?id=${id}`);
    console.log(res);
    await this.fetchUsers();
  }
}
</script>
