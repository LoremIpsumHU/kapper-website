<template>
    <div class="divider2">
        <div>Kapsels</div>
        <img id= "divider2" src="../../assets/divider.jpg" alt="">
    </div>
    <div class="container">
        <div class="hc1"></div>
        <div class="hc2"></div>
        <div class="hc3"></div>
        <div class="hc4"></div>
        <div class="hc5"></div>
        <div class="hc6"></div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style>
#divider2{
    min-height: 7.5vh;
    width: 80%;
    margin: 30px;
    margin-right: 110px;
}
.divider2{
    text-align: center;
    font-size: 50px;
    margin-top: 50px;
    font-weight: bold;
}
.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 70px 0px;
}
.container > div{
    justify-self: center;
    height: 320px;
    width: 420px;
    background-size: cover;
    border-radius: 15px;
}
.hc1{
    background: url(../../assets/hc1.jpg);
    margin-left: 210px;
}
.hc2{
    background: url(../../assets/hc2.jpg);
}
.hc3{
    background: url(../../assets/hc3.jpg);
    margin-right: 210px;
}
.hc4{
    background: url(../../assets/hc4.jpg);
    margin-left: 210px;
}
.hc5{
    background: url(../../assets/hc5.jpg);
}
.hc6{
    background: url(../../assets/hc6.jpg);
    margin-right: 210px;
}    
</style>