<template>
  <div>
    <stappenplan></stappenplan>
    <div id="sector1" class="row">
      <div class="col">
        <div class="kopje">Jouw gekozen behandelingen</div>
        <div id="dropdown" class="unselectable">
            <multiselect
              v-model="treatments"
              mode="tags"
              placeholder="Kies uw behandeling"
              :searchable="true"
              :createTag="true"
              :closeOnSelect="false"
              :options="options"
              class="multiselect-blue"
            >
            </multiselect>
        </div>        
        <div class="text">U kunt meerdere behandelingen toevoegen</div>
      </div>
      <div class="col">
        <div class="kopje">Selecteren</div>
        <div class="text">Maak een afspraak in 4 simpele stappen</div>
      </div>
    </div>
    <div id="sector2">
      <nextpage
        class="button"
        content="Volgende"
        styling="next"
        @click="updateData()"
      ></nextpage>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import stappenplan from "./stappenplan.vue";
import dropdownmenu from "./dropdownmenu.vue";
import nextpage from "./nextpage.vue";
import multiselect from '@vueform/multiselect';

export default {
  components: {
    stappenplan: stappenplan,
    dropdownmenu: dropdownmenu,
    nextpage: nextpage,
    multiselect: multiselect,
  },

  data() {
    return {
      treatments: [],
      options: ['Knippen', 'Kleuren', 'Wassen']
      
    };
  },
  computed: {
    ...mapState ({
      data: state => state.treatments
    })
  },
  methods: {
    updateData() {
      this.$store.commit('UPDATE_FORM_DATA', {
        data: this.treatments
      })
      this.setTreatments()
    },
    setTreatments() {
      this.$store.commit('increment')
    }
  },
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

.col {
  justify-content: center;
}

#sector1 {
  height: 50vh;
}

#sector2 {
  width: 100%;
  display: flex;
  justify-content: center;
}

#dropdown{
  margin-top: 1em;
}

.multiselect-blue {
  --ms-tag-bg: #DBEAFE;
  --ms-tag-color: #3498DB;
  --ms-border-color: #3498DB;
  --ms-dropdown-border-color: #3498DB;
  --ms-option-bg-selected: #3498DB;
  --ms-option-color-selected-disabled: #3498DB;
}

.multiselect.is-active {
  box-shadow: none;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
}

@media screen and (max-width: 400px) {
  .kopje {
    font-size: 5vw;
    text-align: center;
  }

  .text {
    font-size: 3vw;
    text-align: center;
  }
  .row {
    gap: 1em;
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>

<style src="@vueform/multiselect/themes/default.css">
/* https://www.npmjs.com/package/@vueform/multiselect */
</style>