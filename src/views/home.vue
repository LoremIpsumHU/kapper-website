<template>
<div>
  <hero></hero>
  <kapsels></kapsels>
  <info></info>
  <foot></foot>
</div>
</template>
<script>
import hero from '../components/homepage/hero.vue'
import info from '../components/homepage/info.vue'
import kapsels from '../components/homepage/kapsels.vue'
import foot from '../components/homepage/footer.vue'

export default {
  components:{
    'hero': hero,
    'info': info,
    'kapsels' : kapsels,
    'foot' : foot,
  },

  data(){
    return{
        
    }
  }
}
</script>

<style>

</style>
