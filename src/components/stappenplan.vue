<template>
  <div>
    <div id="stappen">
      <div class="stap" id="slected">Stap 1 <br> Selecteren</div>
      <div class="stap">Stap 2 <br> Datum</div>
      <div class="stap">Stap 3 <br> Kapper</div>
      <div class="stap">Stap 4 <br> Gegevens</div>
      <div class="stap">Stap 5 <br> Bevestigen</div>
    </div>

  </div>
</template>

<script>
export default {
    data () {
      return {
        stap1: 'Stap 1 Selecteren',
        stap2: 'Stap 2 Datum',
        stap3: 'Stap 3 Kapper',
        stap4: 'Stap 4 Gegevens', 
        stap5: 'Stap 5 Bevestigen',
        uitleg1: 'Slecteren',
        uitleg2: 'Datum',
        uitleg3: 'Kapper',
        uitleg4: 'Gegevens',
        uitleg5: 'Bevestigen'
      }
    }
}
</script>

<style scoped>
div{
  padding: 0 0 0;
}

#stappen {
  display: flex;
  gap: 2em;
  }

.stap {
  padding: 1em;
}

#slected{
  color: #CF4D36;
}
</style>
