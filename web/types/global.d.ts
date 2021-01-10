import Vue from "vue";
import {accessorType} from '~/store'

type Nullable<T> = T | undefined | null

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  // this
  interface Vue {
    $accessor: typeof accessorType
    $eventBus: Vue
  }
}

declare module "vue/types/options" {
  // option dans le composant
  interface ComponentOptions<V extends Vue> {
  }
}

declare module '@nuxt/types' {
  // ctx.app
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }

  // ctx
  interface Context {
    $accessor: typeof accessorType
  }
}
