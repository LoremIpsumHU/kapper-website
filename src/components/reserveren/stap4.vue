<template>
  <div>
    <stappenplan></stappenplan>
    <div id="sector1" class="row">
      <div class="left">
        <div class="costumerinfo">
          <div class="info">
            <div>Naam: {{ user_data.personId }}</div>
          </div>
          <div class="info">
            <div>Mail adress: {{ user_data.email }}</div>
          </div>
          <div class="info">
            <div>Telefoon nummer: {{ user_data.number ? user_data.number : "Geen telefoonnummer." }}</div>
          </div>
          <div class="info">  
            <div>Behandelingen: {{ formatTreatments(treatments) }}</div>
          </div>
          <div class="info">
            <div>Kapper: {{ barber ? barber : "Geen voorkeur." }}</div>
          </div>
          <div class="info">  
            <div>Datum: {{ formatDate(date) }}</div>
          </div>
          <div class="info">
            <div>Bijzonderheden: {{ user_data.extra ? user_data.extra : "Geen bijzonderheden."}}</div>
          </div>
        </div>
      </div>
      <div class="center">
        <iframe class="kaart" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.747387001234!2d5.173788551309156!3d52.084328279634605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6693e9a2d0c9f%3A0xa9867c6558813da4!2sHogeschool%20Utrecht%2C%20Heidelberglaan%2015%2C%203584%20CS%20Utrecht!5e0!3m2!1snl!2snl!4v1639135059025!5m2!1snl!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
    <div id="sector2">
      <nextpage
        content="Vorige"
        styling="next"
        @click="this.$store.commit('subtracked')"
      ></nextpage>
      <nextpage
        @click="handleSubmit()"
        content="Verstuur"
        styling="next"
      ></nextpage>
    </div>
  </div>
</template>

<script>
import Stappenplan from "./stappenplan.vue";
import Nextpage from "./nextpage.vue";
import { mapState } from "vuex";

export default {
  components: {
    stappenplan: Stappenplan,
    nextpage: Nextpage,
  },
  data() {
    return {};
  },
  computed: mapState({
    user_data: "user_data",
    barber: "barber",
    date: "date",
    treatments:'treatments'
  }),
  methods: {
    handleSubmit() {
      let state = this.$store.state;
      let newState = {};

      Object.keys(state).forEach(key => {
        newState[key] = null;
      });
      alert('U ontvangt zo snel mogelijk een bevestegings mail')

      this.$store.replaceState(newState);
      this.$router.push('/');
    },
    formatDate(date) {
      var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      hour = '' + d.getHours(),
      minute = '' + d.getMinutes();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      if (hour.length < 2) hour = '0' + hour;
      if (minute.length < 2) minute = '0' + minute;

      return [day, month, year].join('-') + " " + [hour, minute].join(":");
    },
    formatTreatments(treatments) {
      return treatments.join(', ').replace(/, ([^,]*)$/, ' en $1');
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 1.2em;
}

.info {
  border: solid 2px #3498db;
  border-radius: 5px;
  background-color: #1e92df3b;
  margin-top: 0.2em;
  padding: 5px;
  word-wrap: break-word;
  width: 40vw;
}

.kaart {
  width: 40vw;
  height: 50vh;
}
.center {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
    justify-content: center;
    font-size: 1em;
  }
  .kaart {
    margin-top: 10px;
    width: 80vw;
  }
  .info {
    width: 80vw;
  }
  .left {
  display: flex;
  width: 100vw;
  justify-content: center;
  }
}
</style>