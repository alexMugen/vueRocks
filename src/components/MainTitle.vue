<template>
  <section id="main-title">
    <img src="~assets/awesome.png" alt="toto">
    <hr>
      <h1 class="md-display-3">{{infoHeader.title}}</h1>
    <hr>
    <p class="md-display-1 title">{{infoHeader.subtitle}}</p>
  </section>
</template>
<script>
  export default {
    props: {
      infoHeader: {
        required: true,
        default () {
          return {
            imgUrl: '',
            title: 'Title',
            subtitle: 'subtitle'
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  h1{
    text-align: center;
    color: #2c3e50!important;
  }
  .title {
    text-align: center;
  }
</style>
