<template>
    <div>
        <section class="header main" id="header">

        <div>
            <img id="logo" src="../../assets/jdklogo.svg" alt="Logo jdk">
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
  margin-top: 10em;
}
.header{
  justify-content: center;
}

.main{
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgba(76, 77, 78, 0.479),
    rgba(4, 9, 30, 0.596)),url(/src/assets/kap.png);
    background-position: center;
    background-size: cover;
    position: relative;
}
</style>