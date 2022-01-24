  <template>
    <div>
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
    width: 100%;
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
  font-size: 56px;
  border: white solid 1px;
  padding: 20px;
  text-decoration: none;
  color: white;
}
.link {
  text-decoration: none;
}
</style>