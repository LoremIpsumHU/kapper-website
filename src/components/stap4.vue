<template>
    <div>
        <stappenplan></stappenplan>
        <div class="row">
            <div>
                <div class="info">
                    <div>Naam:</div>
                    <input class="input" type="text" placeholder="Jouw naam hier">
                </div>
                <div class="info">
                    <div>Mail adress:</div>
                    <input class="input" type="text" placeholder="voorbeeld@yourmail.com">
                </div>
                <div class="info">
                    <div>Telefoon nummer:</div>
                    <input class="input" type="number" placeholder="06 1234 5678">
                </div>
                <div class="row" id="btn">
                    <back></back>   
                    <nextpage></nextpage>                 
                </div>
            </div>
            
            <div id="bijzonderheden">
                <div>Bijzonderheden:</div>
                <input class="input" id="specialinput" type="text" placeholder="Vul hier bijzonderheden in waar wij rekening mee moeten houden">
            </div>
        </div>
    </div>
</template>

<script>
import Stappenplan from './stappenplan.vue'
import Nextpage from './nextpage.vue'
import back from './back.vue'

export default {
    components: {
        'stappenplan': Stappenplan,
        'nextpage': Nextpage,
        'back': back,
    },
    data() {
        return{
            
        }
    }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.input {
    border: none;
    border-bottom: solid 2px #3498DB;
    border-radius: 4px;
    width: 40vw;
    padding: 5px;
}

.info{
    margin-top: 2em;
}

#specialinput {
    box-sizing: border-box;
    border: solid 2px #3498DB;
    resize: vertical;
    padding: 5px;
    height: 40vh;
    width: 40vw;
}

#btn {
    margin-top: 2em;
}
</style>