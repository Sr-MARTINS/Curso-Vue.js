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
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {}, 
  watch: {},
  computed: {},
  methods: {}
}
</script>

<style>

</style>
