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
<style scoped>
.footer{
    margin-top: 50px;
    background-image: linear-gradient(#000000b7,
    rgba(0, 0, 0, 0.733)),url(../../assets/footimg.jpg);
    padding: 60px;
    background-position-y: center;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-shadow: 0px -3px 10px rgb(36, 36, 36);
}
.left > h6{
    color: white;
    font-size: 4.5ch;
    text-align: center;
    margin-bottom: 13px;
}
.left > p{
    color: white;
    font-size: 3.5ch;
    text-align: center;
}
.right > h6{
    color: white;
    font-size: 4.5ch;
    text-align: center;
    margin-bottom: 13px;
}
.right > p{
    color: white;
    font-size: 3.5ch;
    text-align: center;
}
#ft-logo{
    height: 12em;
}
.center{
    text-align: center;
}
@media(max-width: 920px){
    .footer{
        grid-template-columns: repeat(2, 1fr);
    }
    .center{
        display: none;
    }
    .left{
        font-size: 1ch;
    }
    .right{
        font-size: 1ch;
    }
}
</style>