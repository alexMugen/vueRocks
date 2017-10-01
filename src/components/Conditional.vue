<template>
  <section id="conditional">
    <header-app :infoHeader="infoHeader"></header-app>
    <p class="md-display-1">v-if</p>
    <md-layout md-align="center">
      <md-switch v-model="isCardVisible" id="my-test1" name="my-test1" class="md-primary">Show lorem</md-switch>
      <md-switch v-model="isDarkMode" v-if="isCardVisible" id="my-test2" name="my-test2" class="md-primary">Set Dark Mode</md-switch>
    </md-layout>
    <div :class="{'dark': isDarkMode}" v-if="isCardVisible">
      <p class="md-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium ad consectetur dignissimos dolores enim eveniet fuga harum, odit quasi quidem quos soluta. Assumenda at eaque et id minus? Adipisci.</p>
    </div>
  </section>
</template>
<script>
  import HeaderApp from '@/components/MainTitle'
  export default {
    data () {
      return {
        infoHeader: {
          title: 'Conditional Rendering',
          subtitle: ''
        },
        isCardVisible: false,
        isDarkMode: false
      }
    },
    components: {
      HeaderApp
    }
  }
</script>
<style scoped lang="scss">
  .dark {
    background: black;
    color: greenyellow;
    padding: 15px;
  }
  p{
    text-align: center;
  }

</style>
