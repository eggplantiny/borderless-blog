<template>
  <section>
    <div class="cover-wrap">
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
        :style="[{
          marginTop: css.marginTop
        }]"
      >
        <nuxt-content
          :document="doc"
          class="content"
        />
      </article>
    </div>
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
  },
  data () {
    return {
      height: 0
    }
  },
  computed: {
    css () {
      return {
        marginTop: `${this.height}px`
      }
    }
  },
  beforeMount () {
    this.height = window.innerHeight
    window.addEventListener('resize', () => {
      this.height = window.innerHeight
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', () => {})
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
  min-height: 100vh;

  z-index: 10;
  background-color: white;
}

.cover-wrap {
  z-index: 0;
}

.cover {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 0;
  .bg {
    width: 100%;
    height: 100%;
    z-index: 0;
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
