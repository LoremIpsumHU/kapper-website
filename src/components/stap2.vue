<template>
    <div>
        <stappenplan></stappenplan>
        <datepicker class="datepicker"></datepicker>
        <personeel></personeel>
        <nextpage></nextpage>
        <back></back>
    </div>
</template>

<script>
import Stappenplan from './stappenplan.vue';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';
import Nextpage from './nextpage.vue';
import back from './back.vue';

export default {
    components:{
        'stappenplan': Stappenplan,
        'Datepicker': Datepicker,
        'nextpage': Nextpage,
        'back': back,
    },
    data(){
        return{

        }
    },
  methods: {

  },
}
</script>

<style scoped>
.datepicker{
    margin-top: 20px;
    width: 50vw;
}
</style>