<template>
  <div @keyup.enter="setDate()">
    <notifications position="right"></notifications>
    <stappenplan></stappenplan>
    <div id="sector1" class="row">
      <div class="datepicker">
        <v-date-picker
          locale="nl"
          :first-day-of-week="2"
          :min-date="new Date()"
          :disabled-dates="{ weekdays: [1, 7] }"
          v-model="date"
          mode="dateTime"
          :minute-increment="5"
          is24hr
          is-expanded
        >
        </v-date-picker>
      </div>
      <personeel></personeel>
    </div>
    <div id="sector2">
      <nextpage
        content="Vorige"
        styling="next"
        @click="pageBack()"
      ></nextpage>
      <nextpage
        content="Volgende"
        styling="next"
        @click="setDate()"
      ></nextpage>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Stappenplan from "./stappenplan.vue";
import Nextpage from "./nextpage.vue";
import personeel from "./personeel.vue";
import { notify } from "@kyvg/vue3-notification"

export default {
  components: {
    stappenplan: Stappenplan,
    nextpage: Nextpage,
    personeel: personeel,
  },
  data() {
    let date = new Date();
    date.setMinutes(0, 0, 0);
    return {
      date,
    };
  },
  computed:{},
  
  methods: {
    setDate (){
      if (this.date !== null){
        this.$store.state.date = this.date.getTime()
        this.$store.commit('increment')
      }
      else {
        this.$notify({ type: "error", text: "Er is iets fout gegaan probeer opnieuw" });
      }
    },
    pageBack (event){
      if (event) event.preventDefault();

      this.$store.commit('subtracked')
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
}

.datepicker {
  width: 40vw;
  filter: drop-shadow(1px 1px 0.5px #a0a0a0);
}

#sector1 {
  align-items: center;
  height: 50vh;
}

#sector2 {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-bottom: 10px;
}

@media screen and (max-width: 400px)  {
  .row {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .datepicker {
    width: 90vw;
  }
  #sector1 {
    height: auto;
  }
  #sector2 {
    width: auto;
  }
}
</style>