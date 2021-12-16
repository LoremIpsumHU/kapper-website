<template>
  <div>
    <stappenplan></stappenplan>
    <div class="row">
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
    <div class="button" id="btn">
      <nextpage
        content="Vorige"
        styling="next"
        @click="this.$store.commit('subtracked')"
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
import Stappenplan from "./stappenplan.vue";
import Nextpage from "./nextpage.vue";
import personeel from "../components/personeel.vue";

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
  methods: {
    setDate (){
      this.$store.state.day = '17'
      this.$store.state.month = '12'
      this.$store.state.year = '2021'
      this.$store.state.time = '14:00'
      
      this.$store.commit('increment')
    }
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5em;
}

.datepicker {
  width: 40vw;
  filter: drop-shadow(1px 1px 0.5px #a0a0a0);
}

.button {
  display: flex;
  flex-direction: row;
  gap: 2em;
  position: absolute;
  bottom: 10vh;
  left: 10vw;
}
</style>