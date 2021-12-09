<template>
    <div>
        <stappenplan></stappenplan>
        <div class="row">
            <div>
                <div class="info">
                    <div class="required">Naam:</div>
                    <input class="input" type="text" placeholder="Jouw naam hier" required>
                </div>
                <div class="info">
                    <div class="required">Mail adress:</div>
                    <input class="input" type="text" placeholder="voorbeeld@yourmail.com" required>
                </div>
                <div class="info">
                    <div>Telefoon nummer:</div>
                    <input class="input" type="number" placeholder="06 1234 5678 (optioneel)">
                </div>
                <div class="row" id="btn">
                <nextpage content="Vorige" styling="next" @click="this.$store.commit('subtracked')"></nextpage>      
                <nextpage content="Volegende" styling="next" @click="this.$store.commit('increment')"></nextpage>        
                </div>
            </div>
            
            <div id="bijzonderheden">
                <div>Bijzonderheden:</div>
                <textarea class="input" id="specialinput" type="text" placeholder="Vul hier bijzonderheden in waar wij rekening mee moeten houden"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Stappenplan from './stappenplan.vue'
import Nextpage from './nextpage.vue'

export default {
    components: {
        'stappenplan': Stappenplan,
        'nextpage': Nextpage,
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
.required:after {
    content: ' *';
    color: #f13615;
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