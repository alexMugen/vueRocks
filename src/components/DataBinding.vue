<template>
  <section id="data-binding">
    <header-app :infoHeader="infoHeader"></header-app>
    <md-input-container>
      <label>My Favorite framework</label>
      <md-input v-model="Framework"></md-input>
    </md-input-container>
    <p class="md-display-1"><strong>{{Framework}}</strong> framework is the Best</p>
  </section>
</template>
<script>
  import HeaderApp from '@/components/MainTitle'
  export default {
    data () {
      return {
        infoHeader: {
          title: '2 way data binding',
          subtitle: ''
        },
        Framework: 'React'
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
