<template>
    <div>
        <div class="divider">
            <h2> Kapsels </h2>
            <img src="../../assets/schaar.png" alt="">
            <hr>
        </div>
        <div class="container">
            <img src="../../assets/hc1.jpg" alt="Blond golvend kapsel">
            <img src="../../assets/hc2.jpg" alt="Opgescheerd kort kapsel">
            <img src="../../assets/hc3.jpg" alt="Lang golvend bruin kapsel">
            <img src="../../assets/hc4.jpg" alt="Lange baard kort bruin haar">
            <img src="../../assets/hc5.jpg" alt="Kort zwart haar">
            <img src="../../assets/hc6.jpg" alt="Bruine pony kort kapsel">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.divider > h2{
    font-size: 60px;
    margin-top: 80px;
}

.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 70px 0px;
    margin-bottom: 50px;
}
.container > img{
    justify-self: center;
    height: 320px;
    width: 420px;
    background-size: cover;
    border-radius: 15px;

}

</style>