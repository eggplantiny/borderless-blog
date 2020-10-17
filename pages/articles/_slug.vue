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

    <article
      class="pa-4 pa-md-6 pa-lg-8"
    >
      <nuxt-content
        :document="doc"
        class="content"
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

article {

  margin-top: 100vh;
  min-height: 100vh;

  z-index: 10;
  position: relative;
  background-color: white;
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
    z-index: 1;
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
