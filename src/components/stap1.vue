<template>
  <div>
    <img id="jdklogo" src="../assets/jdklogo.svg" alt="Logo jdk">
    <stappenplan></stappenplan>
    <div class="row">
      <div class="col">
        <div class="kopje">Jouw gekozen behandelingen</div>
        <dropdownmenu></dropdownmenu>
        <div class="text">U kunt meerdere behandelingen toevoegen</div>
        <nextpage v-on:click="hide1"></nextpage>
      </div>
      <div class="col">
        <div class="kopje">Selecteren</div>
        <div class="text">Maak een afspraak in 5 simple stappen</div>
      </div>
    </div>
  </div>
</template>

<script>
import Stappenplan from './stappenplan.vue'
import Dropdownmenu from './dropdownmenu.vue'
import Nextpage from './nextpage.vue'

export default {
  components: {
    'stappenplan': Stappenplan,
    'dropdownmenu': Dropdownmenu,
    'nextpage': Nextpage
  },
  data (){
    return{
        hide1: function(){
            
        }
    }
  }
}
</script>

<style scoped>
#jdklogo{
  width: 15%;
  height: 100px;
  margin-top: 2em;
  margin-left: 16px;
  margin-bottom: 2em;
}

.kopje{
  font-size: 3vw;
}

.text{
  font-size: 1.5vw;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5em;
}

.behandeling{
  background-color: #3498DB;
  border: solid 1px;
  padding: 1em;
  margin-top: 1em;
}
</style>