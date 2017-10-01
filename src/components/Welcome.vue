<template>
  <section id="welcome">
    <img src="~assets/awesome.png" alt="toto">
    <md-layout md-align="center">
      <header-app :infoHeader="infoHeader"></header-app>
      <md-card md-with-hover v-for="(workshop, index) in workshops " :key="index" >
       <router-link :to="{name: workshop.route.name}" tag="div">
          <md-card-media>
            <div :class="workshop.img.name" class="media"></div>
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{workshop.title}}</div>
          </md-card-header>

          <md-card-content>
            {{workshop.description}}
          </md-card-content>
      </router-link>
      </md-card>
    </md-layout>

  </section>
</template>

<script>
import HeaderApp from '@/components/MainTitle'
export default {
  name: 'hello',
  data () {
    return {
      workshops: [
        {
          title: 'Hello world',
          description: 'Description',
          img: {
            name: 'hello'
          },
          route: {
            name: 'hello-world'
          }
        },
        {
          title: '2way data binding',
          description: 'Description',
          img: {
            name: 'dataBinding'
          },
          route: {
            name: 'dataBinding'
          }
        },
        {
          title: 'Methods and Events',
          description: 'Description',
          img: {
            name: 'events'
          },
          route: {
            name: 'methods'
          }
        },
        {
          title: 'Conditional Rendering',
          description: 'Description',
          img: {
            name: 'conditional'
          },
          route: {
            name: 'conditional'
          }
        },
        {
          title: 'Loop',
          description: 'Description',
          img: {
            name: 'loop'
          },
          route: {
            name: 'Loop'
          }
        }
      ],
      infoHeader: {
        title: 'WELCOME TO THE NEW WORLD FED',
        subtitle: 'Choose a workshop :'
      }
    }
  },
  components: {
    HeaderApp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title {
  text-align: center;
}
.md-card{
  margin: 10px;
  width: 300px;
  .media{
    width: 100%;
    height: 150px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    &.hello{
      background-image: url('~assets/hello.png') ;
    }
    &.awesome{
      background-image: url('~assets/awesome.png') ;
    }&.dataBinding{
      background-image: url('~assets/dataBinding.png') ;
    }&.events{
      background-image: url('~assets/events.png') ;
    }&.conditional{
      background-image: url('https://www.webdevelopersnotes.com/wp-content/uploads/javascript-if-else-statement.png') ;
    }
    &.loop{
      background-image: url('http://loop-hub.co.uk/wp-content/uploads/2016/09/loop-website.png') ;
    }
  }
}
</style>
