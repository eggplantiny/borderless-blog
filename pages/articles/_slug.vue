<template>
  <v-container>
    <div class="test">
      <nuxt-content
        :document="doc"
      />
      <v-img src="~@/static/images/ryan.jpg" />
    </div>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()

    return {
      doc
    }
  }
}
</script>

<style scoped lang="scss">
.test {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 500;
}
</style>
