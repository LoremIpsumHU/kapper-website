<template>
    <div>
        <stappenplan></stappenplan>
        <div class="row">
            <div class="left">
                <div class="costumerinfo">
                    <div class="row1 info">
                        <div>Naam: </div>
                        <div> {{ name }}</div>                        
                    </div>
                    <div class="row1 info">
                        <div>Mail adress: </div>
                        <div> {{ mail }}</div>                        
                    </div>
                    <div class="row1 info">
                        <div>Telefoon nummer: </div>
                        <div> {{ phone }}</div>                        
                    </div>
                    <div class="costumerbarber row1 info">
                        <div>Kaper:</div>
                        <div>{{ barber }}</div>
                    </div>
                    <div class="Bijzonder info">
                        <div>Bijzonderheden:</div>
                        <div class="row1"> {{ bijzonderheden }}</div>                        
                    </div>
                    <div class="costumerdatum info">
                    <div class="row1">
                        <div>Jaar: </div>
                        <div>{{ day }} / {{ month }} / {{ jaar }} om {{ time }}</div>                    
                    </div>
                </div>
                    <div class="row">
                        <nextpage content="Vorige" styling="next" @click="this.$store.commit('subtracked')"></nextpage> 
                        <nextpage content="Verstuur" styling="next"></nextpage>  
                    </div>
                </div>
            </div>
            <div>
                <a href="https://calendar.google.com/calendar/r/eventedit?text=Kapperafspraak&dates=20211210T100000Z/20211210T110000Z&details=Afspraak+met+Tobias&location=Jan+de+Kapper+-+Heidelberglaan+15
">
                <nextpage content="Google agenda"></nextpage>
                </a>
                <a href="https://www.youtube.com/watch?v=iik25wqIuFo">
                    <nextpage content="Apple agenda"></nextpage>
                </a>
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
            name: 'Piet',
            mail: 'piet@jandekapper.nl',
            phone: '06 2345 3453',
            bijzonderheden: 'Ik ben heel kort dus de stoelen moeten we hoog kunnen staan anders moet de kapper bukken.',
            jaar: '2021',
            month: 'December',
            day: '21',
            time: '14:11',
            barber: 'Tobias'
        }
    },
    computed: {

    }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.2em;
}

.row1 {
    display: flex;
    flex-direction: row;
    gap: 0.3em;
    padding: 0.2em;
}

.info {
    border: solid 2px #808080;
    border-radius: 5px;
    margin-top: 0.2em;
    background-color: rgba(24, 138, 214, 0.548);
}

.left {
    width: 20vw;
}
</style>