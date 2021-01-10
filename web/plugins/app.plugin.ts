import Vue from 'vue'

export let EventBus: Vue

export default async (ctx, inject) => {
  EventBus = new Vue()

  inject('eventBus', EventBus)
}
