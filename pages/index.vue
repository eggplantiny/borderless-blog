<template>
  <v-layout>
    Hello World
  </v-layout>
</template>

<script>

export default {
  async asyncData ({ $content }) {
    const content = await $content('index').fetch()
    console.log(content)
  }
}
</script>
