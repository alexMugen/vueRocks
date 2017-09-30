<template>
  <section id="data-binding">
    <header-app :infoHeader="infoHeader"></header-app>
    <p class="md-display-1">v-on:click</p>
    <md-layout md-align="center">
      <md-button class="md-primary md-primary md-raised" @click.native="loadImage">Random image</md-button>
      <md-button class="md-primary md-accent md-raised" @click.native="clearImage">Clear</md-button>
    </md-layout>
    <div>
      <md-image :md-src="src"></md-image>
    </div>

    <p class="md-display-1">Key modifiers</p>
    <md-layout md-align="center">
      <md-input-container>
        <label>HIT ENTER AND SAY HELLO</label>
        <md-input @keyup.enter.native="dialog('Enter : HELLO')"></md-input>
      </md-input-container>
    </md-layout>

    <md-layout md-align="center">
    <md-input-container>
      <label>HIT ESCAPE AND SAY ADIOS</label>
      <md-input @keyup.esc.native="dialog('Escape: ADIOS')"></md-input>
    </md-input-container>
    </md-layout>

  </section>
</template>
<script>
  import HeaderApp from '@/components/MainTitle'
  export default {
    data () {
      return {
        infoHeader: {
          title: 'Methods and Events',
          subtitle: ''
        },
        src: null,
        images: [
          'https://cdn-images-1.medium.com/max/1200/1*GRM7VUZFA-y4cR4gFPB_lA.jpeg',
          'https://reactjs.org/logo-og.png',
          'http://fourcast.io/wp-content/uploads/2016/10/angular.png'
        ]
      }
    },
    methods: {
      loadImage () {
        this.src = this.images[Math.floor(Math.random() * 3)]
      },
      clearImage () {
        this.src = null
      },
      dialog (msg) {
        alert(msg)
      }
    },
    components: {
      HeaderApp
    }
  }
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    justify-content: center;
  }
  p{
    text-align: center;
  }
  .md-input-container {
    width: 50%;
  }
</style>
