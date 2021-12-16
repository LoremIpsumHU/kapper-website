<template>
  <div>
    <stappenplan></stappenplan>
    <div class="row">
      <div class="left">
        <div class="costumerinfo">
          <div class="row1 info">
            <div>Naam:</div>
            <div>{{ personId }}</div>
          </div>
          <div class="row1 info">
            <div>Mail adress:</div>
            <div>{{ email }}</div>
          </div>
          <div class="row1 info">
            <div>Telefoon nummer:</div>
            <div>{{ number }}</div>
          </div>
          <div class="costumerbarber row1 info">
            <div>Kapper:</div>
            <div>{{ barber }}</div>
          </div>
          <div class="Bijzonder info">
            <div>Bijzonderheden:</div>
            <div class="row1">{{ extra }}</div>
          </div>
          <div class="costumerdatum info">
            <div class="row1">
              <div>Jaar:</div>
              <div>{{ day }} / {{ month }} / {{ year }} om {{ time }}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="center">
          <a
            href="https://calendar.google.com/calendar/r/eventedit?text=Kapperafspraak&dates=20211210T100000Z/20211210T110000Z&details=Afspraak+met+Tobias&location=Jan+de+Kapper+-+Heidelberglaan+15"
          >
            <nextpage content="Google agenda"></nextpage>
          </a>
          <a href="https://www.youtube.com/watch?v=iik25wqIuFo">
            <!-- https://apps.apple.com/nl/app/agenda/id1108185179 Voor de apple agenda app link-->
            <nextpage content="Apple agenda"></nextpage>
          </a>
        </div>
        <!-- <iframe class="kaart" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.747387001234!2d5.173788551309156!3d52.084328279634605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6693e9a2d0c9f%3A0xa9867c6558813da4!2sHogeschool%20Utrecht%2C%20Heidelberglaan%2015%2C%203584%20CS%20Utrecht!5e0!3m2!1snl!2snl!4v1639135059025!5m2!1snl!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> -->
      </div>
    </div>
    <div class="button">
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
    personId: "personId",
    email: "email",
    number: "number",
    extra: "extra",
    barber: "barber",
    day: "day",
    month: "month",
    year: "year",
    time: "time",
  }),
  methods: {
    handleSubmit() {
      let state = this.$store.state;
      let newState = {};

      Object.keys(state).forEach((key) => {
        newState[key] = null;
      });
      newState['current_step'] = 1

      this.$store.replaceState(newState);
      console.log("submitted");
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

.row1 {
  display: flex;
  flex-direction: row;
  gap: 0.3em;
  padding: 0.2em;
}

.info {
  border: solid 2px #3498db;
  border-radius: 5px;
  background-color: #1e92df3b;
  margin-top: 0.2em;
}

.left {
  width: 40vw;
}

.kaart {
  margin-top: 1em;
  width: 30vw;
  height: 37vh;
}
.center {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.button {
  display: flex;
  flex-direction: row;
  gap: 2em;
  position: absolute;
  bottom: 10vh;
  left: 10vw;
}

@media screen and (max-width: 400px) {
  .row {
    font-size: 0.8rem;
  }
}
</style>