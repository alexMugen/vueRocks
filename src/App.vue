<template>
  <div id="app" class="md-container">
    <img src="./assets/awesome.png">
    <transition><router-view></router-view></transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-bottom: 60px;
}
.v-enter-active, .v-leave-active {
   transition: all .3s;
   transform: translate3D(0, 0, 0);
   opacity: 0;
}
.v-enter, .v-leave-active {
  transform: translate3D(-100%, 0, 0);
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
