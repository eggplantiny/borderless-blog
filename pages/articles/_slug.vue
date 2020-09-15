<template>
  <v-layout>
    <div class="test">
      <v-img
        :src="`/images/${backgroundImage}`"
        class="fixed-image"
      />
      <article>
        <nuxt-content
          :document="doc"
        />
      </article>
    </div>
  </v-layout>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()

    const backgroundImage = doc.backgroundImage

    return {
      doc,
      backgroundImage
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
.fixed-image {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

article {
  max-width: 800px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
