<template>
    <div>
        <stappenplan></stappenplan>
        <div class="row">
            <div class="left">
                <div class="costumerinfo">
                    <div>Naam: {{ name }}</div>
                    <div>Mail adress: {{ mail }}</div>
                    <div>Telefoon nummer: {{ phone }}</div>
                    <div>Bijzonderheden: {{ bijzonderheden }}</div>
                </div>
                <div class="costumerbarber">
                    <div>{{ barber }} gaat jouw knippen</div>
                </div>
            </div>           
            <div class="costumerdatum">
                <div>Jaar: {{ jaar }}</div>
                <div>Maand: {{ month }}</div>
                <div>Dag: {{ day }}</div>
                <div>Tijd: {{ time }}</div>
            </div>
        </div>
        <nextpage content="Vorige" styling="next" @click="this.$store.commit('subtracked')"></nextpage>  
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
    }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.left {
    width: 40vw;
}
</style>