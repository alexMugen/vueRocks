<template>
  <section id="data-binding">
    <header-app :infoHeader="infoHeader"></header-app>
    <md-list class="custom-list md-triple-line">
      <md-list-item v-for="(fed, index) in feds" :key="index">
        <md-avatar>
          <img :src="'https://placeimg.com/640/480/people/' + (index+1)" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <md-layout>
            <p><strong>{{fed.name}} </strong><span>From <i>{{fed.from}}</i></span></p>
          </md-layout>
          <md-layout>
            <span>Favorite framework: <strong>{{fed.favoriteFramework}}</strong></span>
          </md-layout>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">phone</md-icon>
        </md-button>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-accent">delete</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
  </section>
</template>
<script>
  import HeaderApp from '@/components/MainTitle'
  export default {
    data () {
      return {
        infoHeader: {
          title: 'Loop with Vue.js',
          subtitle: ''
        },
        feds: [
          {
            name: 'Toto',
            from: 'France',
            favoriteFramework: 'Vue'
          },
          {
            name: 'Tata',
            from: 'France',
            favoriteFramework: 'Vue'
          },
          {
            name: 'Titi',
            from: 'France',
            favoriteFramework: 'React'
          },
          {
            name: 'je',
            from: 'Australia',
            favoriteFramework: 'Vue'
          },
          {
            name: 'nai',
            from: 'Canada',
            favoriteFramework: 'Angular'
          },
          {
            name: 'pas',
            from: 'Nowhere',
            favoriteFramework: 'React'
          },
          {
            name: 'd inspi',
            from: '...',
            favoriteFramework: 'Vue'
          },
          {
            name: 'Sorry',
            from: '',
            favoriteFramework: 'React'
          }
        ]
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
