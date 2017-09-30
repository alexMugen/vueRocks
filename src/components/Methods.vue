<template>
  <section id="data-binding">
    <header-app :infoHeader="infoHeader"></header-app>
    <md-layout md-align="center">
      <md-button class="md-primary md-primary md-raised" @click="loadImage">Random image</md-button>
      <md-button class="md-primary md-accent md-raised" @click="clearImage">Clear</md-button>
      <div>
        <md-image :md-src="src"></md-image>
      </div>
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
          'http://www.pic.digital/images/angularjs-pourquoi-developper.jpg'
        ]
      }
    },
    methods: {
      loadImage () {
        this.src = this.images[Math.floor(Math.random() * 3)]
      },
      clearImage () {
        this.src = null
      }
    },
    components: {
      HeaderApp
    }
  }
</script>
