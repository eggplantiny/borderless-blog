<template>
  <v-app-bar
    app
    color="primary"
    :elevation="0"
  >
    <div class="app-bar">
      <v-toolbar-title color="text">
        Eggplantiny Blog
      </v-toolbar-title>
      <v-btn
        class="mr-4"
        color="button"
        icon
        x-large
        @click="toggleDark"
      >
        <v-icon v-if="dark">
          mdi-weather-night
        </v-icon>
        <v-icon v-else>
          mdi-weather-sunny
        </v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  computed: {
    dark () {
      return this.$store.getters['app/dark']
    }
  },
  methods: {
    toggleDark () {
      this.$store.dispatch('app/toggleDark')
    }
  }
}
</script>

<style scoped lang="scss">
.app-bar {
  max-width: 680px;
  width: 100%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
span.app-bar-title {
  font-size: 1em;
  padding-left: 4px;
}
</style>
