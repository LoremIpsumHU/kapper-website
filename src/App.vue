<template>
  <div id="app">
    <nav>
      <div class="navbar">
        <ul>
          <li><a><router-link to="/" class="button2">Home</router-link></a></li>
          <li><a><router-link to="/reserveren" class="button2">Reserveren</router-link></a></li>
        </ul>        
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script> 
export default {
  components:{

  },
  
  data(){
    return{
        
    }
  },
  computed: {

  },
}
</script>

<style>
*{
  font-family: 'Poppins', sans-serif;
  margin: 0 0;
}
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar{
    flex: 1;
    text-align: right;
    position: fixed;
    top: 30px;
    left: 10px;
    z-index: 1000000;
}
.navbar ul li{
    list-style: none;
    display: inline-block;
    padding: 10px;
    position: relative;
}
.button2{
    color: #CF4D36;
    font-weight: bold;
    text-decoration: none;
    font-size: 35px;
    background-color: rgba(224, 224, 224, 0.842);
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
  
    border-radius: 14px;
}
@media(max-width: 1000px){
  .button2{
    font-size: 25px;
  }
}
</style>