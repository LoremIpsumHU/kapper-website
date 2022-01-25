  <template>
    <div class="alles">
        <section class="main" id="header">
        <div>
            <img id="logo" src="../../assets/jdklogowhite.svg" alt="Logo jdk">
        </div>
        <div class="resbut-box">
          <router-link class="link" to="/reserveren"><a class="res-button" href="">Reserveer nu</a></router-link>
        </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#logo{
  width: 100%;
  height: 300px;
  margin-top: 9em;
}
.main{
    min-height: 100vh;
    background-image: linear-gradient(rgba(68, 74, 129, 0.336),
    rgba(255, 255, 255, 0.178)),url(../../assets/kap.png);
    background-position: center;
    background-size: cover;
    position: relative;
}
.resbut-box{
  text-align: center;
  padding: 40px;
  margin-top: 180px;
}
.res-button {
  font-size: 40px;
  border: white solid 3px;
  padding: 20px;
  text-decoration: none;
  color: white;
}
.res-button:hover {
  background-color: #CF4D36;
  transition-duration: 0.4s;
}
.link {
  text-decoration: none;
}
.alles {
    box-shadow: 0px 3px 10px rgb(36, 36, 36);
}
@media(max-width: 1000px){
  #logo{
    width: 100%;
    height: 170px;
  }
  .res-button{
    font-size: 26px;
    border: white solid 1.5px;
  }
}
</style>