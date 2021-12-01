<template>
  <div>
    <stappenplan></stappenplan>
    <personeel></personeel>
  </div>
</template>

<script>
import Stappenplan from '../src/components/stappenplan.vue'
import Personeel from '../src/components/Personeel.vue'

export default {
  components: {
    'stappenplan': Stappenplan,
    'personeel': Personeel,
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>