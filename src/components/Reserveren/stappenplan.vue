<template>
  <div>
    <div class="logo">
      <img id="jdklogo" src="../../assets/jdklogo.svg" alt="Logo jdk">      
    </div>

    <div class="stappen">
      <div class="stap" v-bind:class="{ slected: this.$store.state.current_step == 1}">Stap 1 <br><span>Behandelingen</span></div>
      <div class="stap" v-bind:class="{ slected: this.$store.state.current_step == 2}">Stap 2 <br><span>Datum</span></div>
      <div class="stap" v-bind:class="{ slected: this.$store.state.current_step == 3}">Stap 3 <br><span>Gegevens</span></div>
      <div class="stap" v-bind:class="{ slected: this.$store.state.current_step == 4}">Stap 4 <br><span>Bevestigen</span></div>
    </div>

  </div>
</template>

<script>
export default {
    data () {
      return {

      }
    },
}
</script>

<style scoped>
div{
  padding: 0 0 0;
}

.logo {
  text-align: center;
}

.stappen {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  }

.stap {
  font-size: 1.5vw;
  margin-bottom: 1em;
  text-align: center;
}

.slected{
  color: #CF4D36;
}

span{
  font-size: 2vw;
}

#jdklogo{
  width: 15%;
  height: 100px;
  margin-top: 2em;
  margin-bottom: 2em;
}
</style>
