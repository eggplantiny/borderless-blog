<template>
  <section>
    <header>
      {{ title }}
    </header>
    <article>
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
    console.log(params.slug)
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
  font-size: 20px;
  font-weight: 500;
  line-height: 1.66;
  width: 100%;
  height: 100%;
}

</style>
