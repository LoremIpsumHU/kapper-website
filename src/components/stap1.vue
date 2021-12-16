<template>
  <div>
    <stappenplan></stappenplan>
    <div class="row">
      <div class="col">
        <div class="kopje">Jouw gekozen behandelingen</div>
        <dropdownmenu></dropdownmenu>
        <div class="text">U kunt meerdere behandelingen toevoegen</div>
        <nextpage
          class="button"
          content="Volgende"
          styling="next"
          @click="this.$store.commit('increment')"
        ></nextpage>
      </div>
      <div class="col">
        <div class="kopje">Selecteren</div>
        <div class="text">Maak een afspraak in 4 simpele stappen</div>
      </div>
    </div>
  </div>
</template>

<script>
import stappenplan from "./stappenplan.vue";
import dropdownmenu from "./dropdownmenu.vue";
import nextpage from "./nextpage.vue";

export default {
  components: {
    stappenplan: stappenplan,
    dropdownmenu: dropdownmenu,
    nextpage: nextpage,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.kopje {
  font-size: 3vw;
}

.text {
  font-size: 1.5vw;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5em;
}

.behandeling {
  background-color: #3498db;
  border: solid 1px;
  padding: 1em;
  margin-top: 1em;
}

.button {
  display: flex;
  flex-direction: row;
  gap: 2em;
  position: absolute;
  bottom: 10vh;
  left: 26.2vw;
}
</style>