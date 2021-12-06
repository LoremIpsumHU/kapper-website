<template>
  <div>
    <stap1></stap1>
    <stap2></stap2>
    <stap3></stap3>
    <stap4></stap4>
    <stap5></stap5>
  </div>
</template>

<script> 
import stap1 from './components/stap1.vue'
import stap2 from './components/stap2.vue'
import stap3 from './components/stap3.vue'
import stap4 from './components/stap4.vue'
import stap5 from './components/stap5.vue'
// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

export default {
  components:{
    'stap1': stap1,
    'stap2': stap2,
    'stap3': stap3,
    'stap4': stap4,
    'stap5': stap5,
  },

  data(){
    return{

    }
  },
  
}
</script>

<style scoped>
  
</style>