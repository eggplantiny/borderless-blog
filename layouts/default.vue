<template>
  <v-app
    :dark="darkMode"
    class="ma-0 pa-0"
  >
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

export default {
  data () {
    return {
    }
  },
  computed: {
    darkMode () {
      return this.$store.getters['app/darkMode']
    }
  },
  watch: {
    darkMode (value) {
      this.$vuetify.theme.dark = value
    }
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
