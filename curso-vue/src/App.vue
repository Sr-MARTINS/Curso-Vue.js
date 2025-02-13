<template>
  <ul>
    <li>
      <router-link to="/"> Home</router-link>
      <router-link :to="{name:'basesobre'}"> Sobre</router-link>
      <router-link to="/services"> Servicos</router-link>
    </li>
  </ul>
  <router-view></router-view>
  <!-- <HelloWorld/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';



export default {
  name: 'App',
  components: 'HelloWorld'
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
