<template>
  <section id="hello-world">
    <header-app :infoHeader="infoHeader"></header-app>
    Hello

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
        }
      }
    },
    components: {
      HeaderApp
    }
  }
</script>
