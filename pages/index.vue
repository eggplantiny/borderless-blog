<template>
  <v-layout
    column
    class="layout"
  >
    <template
      v-for="(article, index) in articles"
    >
      <v-hover
        :key="index"
        v-slot="{ hover }"
      >
        <v-card
          flat
          :elevation="hover ? 5 : 0"
          class="card-transition"
          :class="hover ? 'my-3' : ''"
          @click="onClickCard(article)"
        >
          <v-card-title>
            {{ article.title }}
          </v-card-title>
        </v-card>
      </v-hover>
    </template>
  </v-layout>
</template>

<script>

function strParse (str) {
  try {
    return JSON.parse(str)
  } catch (e) {
    return null
  }
}

export default {
  name: 'Root',
  async asyncData ({ $content }) {
    const doc = await $content('index').fetch()
    const articles = Object
      .keys(doc)
      .filter(key => strParse(key) !== null)
      .filter(key => key !== 'index')
      .map(key => doc[key])

    return {
      articles,
      doc
    }
  },
  methods: {
    onClickCard (article) {
      this.$router.push(`/articles${article.path}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .layout {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .card-transition {
    transition: box-shadow 200ms, margin-bottom 200ms, margin-top 200ms;
  }
</style>
