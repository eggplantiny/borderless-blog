<template>
  <section>
    <div class="cover">
      <v-img
        :src="`/blog/images/${backgroundImage}`"
        :dark="dark"
        class="bg"
      >
        <div class="text-area">
          <h1 class="mb-sm-2 mb-md-4">
            {{ title }}
          </h1>
          <h3>
            {{ subtitle }}
          </h3>
        </div>
      </v-img>
    </div>

    <article>
      <nuxt-content
        :document="doc"
      />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()

    const backgroundImage = doc.backgroundImage
    const title = doc.title
    const subtitle = doc.subtitle
    const dark = doc.dark === true

    return {
      doc,
      backgroundImage,
      title,
      subtitle,
      dark
    }
  }
}
</script>

<style scoped lang="scss">
section {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  height: 100%;
}

.article {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  margin-top: 100vh;
  padding: 0 20px;
  height: 100vh;

  z-index: 5;
}

.cover {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .bg {
    width: 100%;
    height: 100%;
    .text-area {
      position: absolute;
      top: 29.5%;
      width: 100%;
    }

    h1, h3 {
      text-align: center;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      word-break: keep-all;
    }

    h1 {
      font-size: 2.5em;
    }

    h3 {
      font-size: 1.5em;
    }
  }
}

</style>
