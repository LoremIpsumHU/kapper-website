<template>
  <div id="colmn">
    <div id="col">
      <div id="Alisha">
        <img src="src/assets/Alisha.png" alt="Alisha">
      </div>
      <div id="Kevin">
        <img src="src/assets/Kevin.png" alt="Kevin">
      </div>
    </div>

    <div id="col">
      <div id="Pieter">
      <img src="src/assets/Pieter.png" alt="Pieter">
    </div>
    <div id="Tobias">
      <img src="src/assets/Tobias.png" alt="Tobias">
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

<style>
#colmn{
  display: flex;
  flex-direction: row;
  gap: 5em;
}

img{
  width: 100%;
  height: 100px;
}
</style>