<template>
  <v-app
    :dark="darkMode"
  >
    <app-bar
      app
    />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '~/components/organisms/AppBar'
export default {
  components: { AppBar },
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
  }
}
</script>
