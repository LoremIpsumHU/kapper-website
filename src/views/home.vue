<template>
<div>
  <hero></hero>
  <info></info>
</div>
</template>

<script>
import hero from '../components/homepage/hero.vue'
import info from '../components/homepage/info.vue'

export default {
  components:{
    'hero': hero,
    'info': info,
  },

  data(){
    return{
        
    }
  }
}
</script>

<style>

</style>
