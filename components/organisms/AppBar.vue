<template>
  <v-app-bar
    app
    height="120"
    :elevation="0"
  >
    <v-spacer />
    <v-btn
      class="mr-4"
      color="primary"
      icon
      x-large
      @click="toggleDarkMode"
    >
      <v-icon v-if="darkMode">
        mdi-weather-night
      </v-icon>
      <v-icon v-else>
        mdi-weather-sunny
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  computed: {
    darkMode () {
      return this.$store.getters['app/darkMode']
    }
  },
  methods: {
    toggleDarkMode () {
      const { darkMode } = this
      this.$store.dispatch('app/toggleDarkMode', !darkMode)
    }
  }
}
</script>

<style scoped>

</style>
