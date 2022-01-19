<template>
  <div id="colmn" class="unselectable">
    <div id="col">
      <div id="Tobias" class="card" @click="setKapper('Tobias')">
        <img src="../../assets/Tobias.png" alt="Tobias">
        <div class="card-info">
          <div class="names">Tobias</div>
          <div class="info">Baarden specialist</div>
        </div>
      </div>
      <div id="Kevin" class="card under" @click="setKapper('Kevin')">
        <img src="../../assets/Kevin.png" alt="Kevin">
        <div class="card-info">
          <div class="names">Kevin</div>
          <div class="info">Haar kleuren</div>
        </div>
      </div>
    </div>

    <div id="col">
      <div id="Pieter" class="card" @click="setKapper('Pieter')">
        <img src="../../assets/Pieter.png" alt="Pieter">
        <div class="card-info">  
          <div class="names">Pieter</div>
          <div class="info">Dames <br> Praten</div>
        </div>
      </div>
      <div id="Alisha" class="card under" @click="setKapper('Alisha')">
        <img src="../../assets/Alisha.png" alt="Alisha">
        <div class="card-info">
          <div class="names">Alisha</div>
          <div class="info">Puntjes bij knippen <br> Stagair -10%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    setKapper: function(kapper) {
      if (this.$store.state.barber !== ''){
        document.getElementById(this.$store.state.barber).classList.remove('selected')
      }
      this.$store.state.barber = kapper
      document.getElementById(this.$store.state.barber).classList.add('selected')
    },
  }
}
</script>

<style scoped>
#colmn{
  display: flex;
  flex-direction: row;
  gap: 4vw;
}

.under {
  margin-top: 5vh;
}

img{
  width: 100px;
  height: 100px;
  border-radius: 5px 0px 0px 5px;
}

.card{
  display: flex;
  flex-direction: row;
  background-color: #FEFEFE;
  padding: 5px;
  width: 24vw;
  border: solid 1px #808080;
  border-radius: 5px;
  filter: drop-shadow(1px 1px 0.5px #a0a0a0);
  cursor: pointer;
}

.names{
  font-size: 2em;
}

.card-info{
  padding-left: 10px;
}

.card.selected {
  border: solid 2px coral;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media screen and (max-width: 400px)  {
  #colmn {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    justify-content: center;
  }
  .names {
    font-size: 1.5em;
  }
  .card {
    width: 90vw;
  }
  .info {
    font-size: 1em;
  }
  .under {
  margin-top: 2vh;
  }
}
</style>