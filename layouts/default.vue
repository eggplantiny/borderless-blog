<template>
  <v-app
    :dark="dark"
    class="ma-0 pa-0"
    v-show="show"
  >
    <app-bar />
    <v-main>
      <v-container
        fluid
        class="ma-0 pa-0 fill-height"
      >
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AppBar from '../components/organisms/AppBar'
export default {
  components: { AppBar },
  data () {
    return {
      show: false
    }
  },
  computed: {
    dark () {
      return this.$store.getters['app/dark']
    }
  },
  watch: {
    dark (value) {
      this.$vuetify.theme.dark = value
    }
  },
  async beforeMount () {
    this.show = false
    await this.$store.dispatch('app/fetchDark')
    this.show = true
  },
  head () {
    return {
      style: [{
        hid: 'vuetifyTheme',
        type: 'text/css',
        cssText: this.$vuetify.theme.generatedStyles
      }]
    }
  }
}
</script>
