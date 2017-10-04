<template>
  <section id="welcome">
    <hr>
    <h1 class="md-display-3">WELCOME TO THE NEW WORLD <strong>FED</strong></h1><hr>
    <p class="md-display-1 title">Choose a workshop :</p>
    <md-layout md-align="center">

      <md-card md-with-hover v-for="(workshop, index) in workshops " :key="index">
        <md-card-media>
          <div :class="workshop.img.name" class="media"></div>
        </md-card-media>

        <md-card-header>
          <div class="md-title">{{workshop.title}}</div>
        </md-card-header>

        <md-card-content>
          {{workshop.description}}
        </md-card-content>
      </md-card>
    </md-layout>

  </section>
</template>

<script>
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
          }
        },
        {
          title: 'another workshop',
          description: 'Description',
          img: {
            name: 'awesome'
          }
        },
        {
          title: 'another workshop',
          description: 'Description',
          img: {
            name: 'awesome'
          }
        },
        {
          title: 'another workshop',
          description: 'Description',
          img: {
            name: 'awesome'
          }
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1{
  text-align: center;
  color: #2c3e50!important;
}
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
    &.hello{
      background: url('../assets/hello.png') ;
      background-size: cover;
    }
    &.awesome{
      background: url('../assets/awesome.png') ;
      background-size: cover;
    }
  }
}
</style>
