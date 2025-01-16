<template>
    <!--CHAMANDO O ELEMENTO-->
      <!--OU PODEMOS USAR DA FORMA SIMPLIFICANDO -->
      <!-- <TheHeader /> -->
    <TheHeader></TheHeader> 

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

  // IMPORTAÇÃO DO ARQUIVO
  //  PASSANDO O NOME "TheHeader"  E O CAMINHA "'./components/TheHeader.vue'"
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  
  // o "components" vai declarar os componetes q vamos usar no elemente externo
  components: {
    HelloWorld,

    // PASSAREMOS O ELEMENTO PRA ASSIM SEM SER "EXPORTADO" A PG
    TheHeader
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
