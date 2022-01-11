<template>
<div class=divider>
    <img id= "divider" src="../../assets/divider.jpg" alt="">
</div>
<section class="info-old">
    <div class="row-old">
        <div class="infobox-old">
            <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et posuere nulla.
            Aenean ullamcorper mollis dui nec viverra. Nam eu feugiat odio. Aliquam orci justo,
            molestie at lectus ac, malesuada aliquam diam. Suspendisse ut mauris quis eros aliquam
            fermentum. Pellentesque sed lectus vitae lorem pretium pretium vitae vitae tortor. In 
            elementum vitae sapien vel tempus. Orci varius natoque 
            </P>
        </div>
        <div class="old-img"></div>
        <div class="sidebox-old">
            <h1>
                Van oud,
            </h1>
        </div>
    </div>

</section>
<section class="info-new">
    <div class="row-new">
        <div class="sidebox-new">
            <h1>
                Naar nieuw.
            </h1>
        </div>
        <div class="new-img"></div>
        <div class="infobox-new">
            <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et posuere nulla.
            Aenean ullamcorper mollis dui nec viverra. Nam eu feugiat odio. Aliquam orci justo,
            molestie at lectus ac, malesuada aliquam diam. Suspendisse ut mauris quis eros aliquam
            fermentum. Pellentesque sed lectus vitae lorem pretium pretium vitae vitae tortor. In 
            elementum vitae sapien vel tempus. Orci varius natoque 
            </P>
        </div>
    </div>

</section>
</template>
<script>
export default {
    
}
</script>
<style>
#divider{
    min-height: 7.5vh;
    width: 80%;
    margin: 30px;
    margin-right: 100px;
}
.divider{
    text-align: center;
}
.row-old{
    display: flex;
    text-align: center;
    padding: 20px;
}
.info-old{
    width: 75%;
    margin: auto;
    text-align: center;
}
.infobox-old{
    flex-basis: 80%;
    background: #CF4D36;
    border-radius: 20px;
    border: 7px solid #50C4E9;
    color: white;
}
.sidebox-old{
    flex-basis: 20%;
    background: #50C4E9;
    height: 29px;
    padding: 20px;
    align-self: center;
}
.old-img{
    flex-basis: 50%;
    background:  url("../../assets/old.jpg") center;
    background-size: cover;
    border-radius: 20px;
    border: 7px solid #50C4E9;
}
.row-new{
    display: flex;
    text-align: center;
    padding: 20px
}
.info-new{
    width: 75%;
    margin: auto;
    text-align: center;
}
.infobox-new{
    flex-basis: 80%;
    background: #CF4D36;
    border-radius: 20px;
    border: 7px solid #50C4E9;
    color: white;
}
.sidebox-new{
    flex-basis: 20%;
    background: #50C4E9;
    height: 29px;
    padding: 20px;
    align-self: center;
}
.new-img{
    flex-basis: 50%;
    background: linear-gradient(rgba(255, 255, 255, 0),
    rgba(49, 93, 189, 0.281)),url("../../assets/new.jpg") center;
    background-size: cover;
    border-radius: 20px;
    border: 7px solid #50C4E9;
}
h1{
    font-size: 29px;
    text-shadow: 3px 3px 4px #00000056;
}

p{
    padding: 30px;
    font-size: 25px;
}
</style>