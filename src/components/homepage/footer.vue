<template>
    <div class="footer">
        <div class="foot-inner">
            <div class="ft-left">
                <h5>Locatie zaak</h5>
                <a>Kapper Jan</a>
                <a>Heidelberglaan 15</a>
                <a>1234 AY</a>
                <a>Utrecht</a>
            </div>
        <div class="ft-center">
            <img id="ft-logo" src="../../assets/jdklogowhite.svg" alt="Logo jdk">
        </div>
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
    padding: 80px;
    background-position-y: center;
}
.ft-left{
    display: flex;
    flex-direction: column;
    row-gap: 13px;
}
.ft-left > h5{
    color: white;
    font-size: 50px;
    margin-bottom: 10px;
}

.ft-left > a{
    color: #fff;
    font-size: 30px;
}
#ft-logo{
    height: 15em;
}

    
</style>