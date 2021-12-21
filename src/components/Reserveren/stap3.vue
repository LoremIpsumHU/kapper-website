<template>
  <div>
    <stappenplan></stappenplan>
    <form id="sector1" class="row">
      <div>
        <div class="info">
          <div class="required">Naam:</div>
          <input
            class="input"
            type="text"
            placeholder="Jouw naam hier"
            v-model="personId"
          />
        </div>
        <div class="info">
          <div class="required">Mail adress:</div>
          <input
            class="input"
            type="text"
            placeholder="voorbeeld@yourmail.com"
            v-model="email"
          />
        </div>
        <div class="info">
          <div>Telefoon nummer:</div>
          <input
            class="input"
            type="text"
            placeholder="06 1234 5678"
            v-model="number"
          />
        </div>
      </div>

      <div id="bijzonderheden">
        <div>Bijzonderheden:</div>
        <textarea
          class="input"
          id="specialinput"
          type="text"
          v-model="extra"
          placeholder="Vul hier bijzonderheden in waar wij rekening mee moeten houden"
        ></textarea>
      </div>
    </form>
    <div id="sector2">
      <nextpage
        content="Vorige"
        styling="next"
        @click="this.$store.commit('subtracked')"
      ></nextpage>
      <nextpage
        type="submit"
        content="Volgende"
        styling="next"
        @click="
          pushInfo();
          valid();
        "
      ></nextpage>
    </div>
  </div>
</template>

<script>
import Stappenplan from "./stappenplan.vue";
import Nextpage from "./nextpage.vue";
// import useValidate from '@vuelidate/core'
// import { required } from '@vuelidate/validators'

export default {
  components: {
    stappenplan: Stappenplan,
    nextpage: Nextpage,
  },

  data() {
    return {
      // v$: useValidate(),
      email: "",
      personId: "",
      number: "",
      extra: "",
    };
  },

  methods: {
    pushInfo(event) {
      this.$store.commit("increment");

      this.$store.state.personId = this.personId;
      this.$store.state.email = this.email;
      this.$store.state.number = this.number;
      this.$store.state.extra = this.extra;

      if (event) event.preventDefault();
    },
    valid() {
      alert("it works");
    },
  },

  // validations() {
  //   return {
  //     personId: { required },
  //     email: { required },
  //   }
  // }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.input {
  border: none;
  border-bottom: solid 2px #3498db;
  border-radius: 4px;
  width: 40vw;
  padding: 5px;
}

.info {
  margin-top: 2em;
}
.required:after {
  content: " *";
  color: #f13615;
}

#specialinput {
  box-sizing: border-box;
  border: solid 2px #3498db;
  resize: vertical;
  padding: 5px;
  height: 40vh;
  width: 40vw;
}

#sector2 {
  width: 100%;
  display: flex;
  justify-content: left;
}
</style>