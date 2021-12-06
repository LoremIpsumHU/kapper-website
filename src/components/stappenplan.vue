<template>
  <div>
    <div class="stappen">
      <div class="stap" id="slected">Stap 1 <br><span>Behandelingen</span></div>
      <div class="stap">Stap 2 <br><span>Datum</span></div>
      <div class="stap">Stap 3 <br><span>Kapper</span></div>
      <div class="stap">Stap 4 <br><span>Gegevens</span></div>
      <div class="stap">Stap 5 <br><span>Bevestigen</span></div>
    </div>

  </div>
</template>

<script>
export default {
    data () {
      return {

      }
    }
}
</script>

<style scoped>
div{
  padding: 0 0 0;
}

.stappen {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  }

.stap {
  font-size: 1.5vw;
  margin-bottom: 1em;
}

#slected{
  color: #CF4D36;
}

span{
  font-size: 2vw;
}
</style>
