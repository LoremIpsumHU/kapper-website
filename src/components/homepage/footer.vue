<template>
    <div class="footer">
        <div class="left">
            <h6> Locatie van de zaak</h6>
            <p> Kapper Jan <br>
                Heidelberglaan 15 <br>
                1234 AY <br>
                Utrecht</p>
        </div>
        <div class="center">
            <img id="ft-logo" src="../../assets/jdklogowhite.svg" alt="Logo jdk">
        </div>
        <div class="right">
            <h6>Contact</h6>
            <p> Email: <br> Jan@jandekapper.nl <br> <br>
            Telefoon: <br> +31 6 12345678
            </p>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
.footer{
    margin-top: 80px;
    background-image: linear-gradient(#000000b7,
    rgba(0, 0, 0, 0.733)),url(../../assets/footimg.jpg);
    padding: 60px;
    background-position-y: center;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.left > h6{
    color: white;
    font-size: 35px;
    text-align: center;
    margin-bottom: 13px;
}
.left > p{
    color: white;
    font-size: 30px;
    text-align: center;
}
.right > h6{
    color: white;
    font-size: 35px;
    text-align: center;
    margin-bottom: 13px;
}
.right > p{
    color: white;
    font-size: 25px;
    text-align: center;
}
#ft-logo{
    height: 12em;
}
.center{
    text-align: center;
}
</style>