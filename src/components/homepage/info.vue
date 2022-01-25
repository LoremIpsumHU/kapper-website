<template>
    <div class="info">
        <div class="divider2">
            <h2>Over de zaak</h2>
            <img src="../../assets/schaar.png" alt="">
            <hr>
        </div>
        <section class="info-old">
            <div class="row-old">
                <div class="infobox-old">
                    <P>
                        Toen de zaak jan de kapper kwam heb ik jan, de zaak overgenomen van mijn opa.
                         Hij is deze zaak begonnen in 1892 op 21 september. De zaak was toen nog klein en er 
                         konden net 3 mensen in de zaak om geknipt en gewassen te worden.
                         Toen ik ongeveer 16 werd begon ik ook de meeste mensen te knippen in de zaak van mijn opa. Dit vond ik leuk en
                         uiteindelijk heb ik het van hem overgenomen
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
                         Ondertussen heb ik de zaak al 30 jaar overgenomen. 
                         We hebben de modernste apparaten om snel en goed genkipt 
                         te worden. Daarnaast bieden wij nu ook stylen en haar kleuren 
                         aan. Wil je zonder al te veel moeite een kappersafspraak in je pauze? 
                         Maak dan nu snel een afspraak.

                    </P>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.divider2 > h2{
    font-size: 60px;
    margin-top: 80px;
}
.divider2{
    text-align: center;
}
.divider2 > hr {
    margin-left: 70px;
    margin-right: 70px;
    position: relative;
    top: -86px;
    border: none;
    border-top: 5px dotted black;
    color: rgba(255, 255, 255, 0);
    background-color: rgba(255, 255, 255, 0);
    height: 1px;
}
.divider2 > img{
    height: 160px;
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
    width: 10ch;
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
    width: 10ch;
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
.sidebox-new > h1{
    font-size: 29px;
    text-shadow: 3px 3px 4px #00000056;
}
.sidebox-old > h1{
    font-size: 29px;
    text-shadow: 3px 3px 4px #00000056;
}
.infobox-new > p{
    padding: 30px;
    font-size: 25px;
}
.infobox-old > p{
    padding: 30px;
    font-size: 25px;
}
@media(max-width: 920px){
    *{
        display: none;
    }
}
</style>