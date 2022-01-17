<template>
<div>
  <hero></hero>
  <kapsels></kapsels>
  <info></info>
</div>
</template>

<script>
import hero from '../components/homepage/hero.vue'
import info from '../components/homepage/info.vue'
import kapsels from '../components/homepage/kapsels.vue'

export default {
  components:{
    'hero': hero,
    'info': info,
    'kapsels' : kapsels,
  },

  data(){
    return{
        
    }
  }
}
</script>

<style>

</style>
