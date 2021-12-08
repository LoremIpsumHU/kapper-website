<template>
  <div id="colmn">
    <div id="col">
      <div id="Alisha" class="card">
        <img src="src/assets/Alisha.png" alt="Alisha">
        <div class="card-info">
          <div class="names">Alisha</div>
          <div>Puntjes bij knippen <br> Stagair <br> 10% korting</div>
        </div>
          
      </div>
      <div id="Kevin" class="card">
        <img src="src/assets/Kevin.png" alt="Kevin">
        <div class="card-info">
          <div class="names">Kevin</div>
          <div>Haar kleuren</div>
        </div>
      </div>
    </div>

    <div id="col">
      <div id="Pieter" class="card">
      <img src="src/assets/Pieter.png" alt="Pieter">
      <div class="card-info">  
        <div class="names">Pieter</div>
        <div>Dames <br> Praten</div>
      </div>
    </div>
    <div id="Tobias" class="card">
      <img src="src/assets/Tobias.png" alt="Tobias">
      <div class="card-info">
        <div class="names">Tobias</div>
        <div>Baarden specialist</div>
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
  }
}
</script>

<style scoped>
#colmn{
  display: flex;
  flex-direction: row;
  gap: 5em;
}

img{
  width: 100px;
  height: 100px;
}

.card{
  display: flex;
  flex-direction: row;
  padding: 5px;
  background: #3498DB;
  width: 33vw;
  margin-top: 10px;
}

.names{
  font-size: 2em;
}

.card-info{
  padding-left: 10px;
}
</style>