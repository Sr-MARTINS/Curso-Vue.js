<template>
    <TheHeader />
    <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    TheHeader
  },
  data() {
    return {
      showHeader : true,
      fristName : 'Joao',
      lastName : 'Victor',
      showName: true,
      accesLevel: 'user',
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
