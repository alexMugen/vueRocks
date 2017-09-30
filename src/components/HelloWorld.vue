<template>
  <section id="hello-world">
    <header-app :infoHeader="infoHeader"></header-app>
    <p class="md-display-1">{{msg}}</p>

  </section>
</template>
<script>
  import HeaderApp from '@/components/MainTitle'
  export default {
    data () {
      return {
        infoHeader: {
          title: 'Hello Word',
          subtitle: ''
        },
        msg: 'This is my first hello world in VueJs'
      }
    },
    components: {
      HeaderApp
    }
  }
</script>
<style scoped>
  p{
    text-align: center;
  }
</style>
