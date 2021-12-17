<template>
  <div>
    <stap1 v-show="current_step == 1"></stap1>
    <stap2 v-show="current_step == 2"></stap2>
    <stap3 v-show="current_step == 3"></stap3>
    <stap4 v-show="current_step == 4"></stap4>
  </div>
</template>

<script> 
import stap1 from '../components/Reserveren/stap1.vue'
import stap2 from '../components/Reserveren/stap2.vue'
import stap3 from '../components/Reserveren/stap3.vue'
import stap4 from '../components/Reserveren/stap4.vue'

export default {
  components:{
    'stap1': stap1,
    'stap2': stap2,
    'stap3': stap3,
    'stap4': stap4,
  },

  data(){
    return{
        
    }
  },
  computed: {
    current_step() {
      return this.$store.state.current_step
    }
  },
  
}
</script>

<style scoped>
  
</style>