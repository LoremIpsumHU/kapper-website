<template>
    <div>
        <section class="header main" id="header">

        <div>
            <img id="logo" src="../../assets/jdklogowhite.svg" alt="Logo jdk">
        </div>

        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

#logo{
  width: 100%;
  height: 300px;
  margin-top: 20em;
}
.header{
  justify-content: center;
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
</style>