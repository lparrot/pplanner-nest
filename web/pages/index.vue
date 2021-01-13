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

    <table class="min-w-full table-auto">
      <thead class="justify-between">
      <tr class="bg-gray-800">
        <th class="px-16 py-2 text-gray-300">Firstname</th>
        <th class="px-16 py-2 text-gray-300">Lastname</th>
        <th class="px-16 py-2 text-gray-300">Email</th>
        <th class="px-16 py-2 text-gray-300">Phone</th>
        <th class="px-16 py-2 text-gray-300">Address</th>
        <th class="px-16 py-2 text-gray-300">Actions</th>
      </tr>
      </thead>
      <tbody class="bg-gray-200">
      <tr v-for="user in users" :key="user._id" class="bg-white border-4 border-gray-200">
        <td class="px-16 py-2">{{ user.first_name }}</td>
        <td class="px-16 py-2">{{ user.last_name }}</td>
        <td class="px-16 py-2">{{ user.email }}</td>
        <td class="px-16 py-2">{{ user.phone }}</td>
        <td class="px-16 py-2">{{ user.address }}</td>
        <td class="px-16 py-2">
          <div class="flex justify-center">
            <router-link :to="{ name: 'edit', params: { id: user._id } }" class="p-button primary rounded-full" tag="button">
              <i class="fas fa-pencil-alt"></i>
            </router-link>
            <button class="p-button danger rounded-full" @click="deleteUser(user._id)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  middleware: 'auth'
})
export default class PageIndex extends Vue {
  public users: any[] = [];

  async fetch() {
    await this.fetchUsers();
  }

  async fetchUsers() {
    this.users = await this.$axios.$get(`/users`);
  }

  async deleteUser(id) {
    const res = await this.$axios.$delete(`/users?id=${id}`);
    await this.fetchUsers();
  }
}
</script>
