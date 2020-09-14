<template>
  <v-app-bar
    app
    :elevation="0"
    class=""
  >
    <v-spacer />
    <v-btn
      icon
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
