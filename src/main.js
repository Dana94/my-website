// Import main css
import '~/assets/style/index.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}