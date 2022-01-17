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
  margin-top: 12em;
}
.header{
  justify-content: center;
}
.main{
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(#00000083,
    rgba(46, 65, 87, 0.473)),url(../../assets/kap.png);
    background-position: center;
    background-size: cover;
    position: relative;
}
</style>