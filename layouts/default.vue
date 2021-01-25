<template>
  <v-app
    :dark="dark"
    class="ma-0 pa-0"
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
  beforeMount () {
    this.$store.dispatch('app/fetchDark')
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
