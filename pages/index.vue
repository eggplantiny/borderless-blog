<template>
  <v-layout
    column
    class="layout"
  >
    <template
      v-for="article of articles"
    >
      <v-hover
        :key="article.slug"
        v-slot="{ hover }"
      >
        <nuxt-link
          :to="`/blog/${article.slug}`"
        >
          <v-card
            flat
            class="card-transition"
            :class="hover ? 'outlined' : ''"
          >
            <v-card-title>
              {{ article.title }}
            </v-card-title>
            <v-card-text>
              {{ article.description }}
            </v-card-text>
          </v-card>
        </nuxt-link>
      </v-hover>
    </template>
  </v-layout>
</template>

<script>

export default {
  name: 'Root',
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
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

  .outlined {
    border: black solid 2px;
  }

  .card-transition {
    transition: margin-bottom 200ms, margin-top 200ms;
  }

  a {
    text-decoration: none;
  }
</style>
