<template>
  <div>
    <div class="logo">
      <img id="jdklogo" src="../../assets/jdklogo.svg" alt="Logo jdk" />
    </div>

    <div class="stappen">
      <div
        class="stap"
        v-bind:class="{ slected: this.$store.state.current_step == 1 }"
      >
        Stap 1 <br /><span>Behandelingen</span><br />
        <p>{{ stap1 }}</p>
      </div>
      <div
        class="stap"
        v-bind:class="{ slected: this.$store.state.current_step == 2 }"
      >
        Stap 2 <br /><span>Datum</span>
        <p>{{ stap2 }}</p>
        <p>{{ stap22 }}</p>
      </div>
      <div
        class="stap"
        v-bind:class="{ slected: this.$store.state.current_step == 3 }"
      >
        Stap 3 <br /><span>Gegevens</span>
      </div>
      <div
        class="stap"
        v-bind:class="{ slected: this.$store.state.current_step == 4 }"
      >
        Stap 4 <br /><span>Bevestigen</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    stap1() {
      if (this.$store.state.current_step !== 1)
        return this.formatTreatments(this.$store.state.treatments);
    },

    stap2() {
      if (!(this.$store.state.current_step < 3))
        return this.formatDate(this.$store.state.date);
    },

    stap22() {
      if (!(this.$store.state.current_step < 3))
        return this.$store.state.barber;
    },
  },

  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hour = "" + d.getHours(),
        minute = "" + d.getMinutes();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      if (hour.length < 2) hour = "0" + hour;
      if (minute.length < 2) minute = "0" + minute;

      return [day, month, year].join("-") + " " + [hour, minute].join(":");
    },
    formatTreatments(treatments) {
      return treatments.join(", ").replace(/, ([^,]*)$/, " en $1");
    },
  },
};
</script>

<style scoped>
div {
  padding: 0 0 0;
}

.logo {
  text-align: center;
}

.stappen {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.stap {
  font-size: 1.5vw;
  margin-bottom: 1em;
  text-align: center;
}

.slected {
  color: #cf4d36;
}

span {
  font-size: 2vw;
}

#jdklogo {
  width: auto;
  height: 100px;
  margin-top: 2em;
  margin-bottom: 2em;
}

@media screen and (max-width: 400px) {
  .stap {
    font-size: 1rem;
  }
  span {
    font-size: 4vw;
  }
}
</style>
