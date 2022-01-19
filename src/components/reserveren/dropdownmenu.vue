<template>
    <div id="dropdown" class="unselectable">
        <multiselect v-model="Value" mode="multple" :closeOnSelect="false" :searchable="true" :ceateTag='true' :options="[
          {value: 'Knippen', label: 'Knippen'},
          {value: 'Kleuren', label: 'Kleuren'},
          {value: 'Wassen', label: 'Wassen'},
          ]"
          class="multiselect-blue">
        </multiselect>
    </div>
</template>

<script>
import multiselect from '@vueform/multiselect'

export default {
  components:{
    'multiselect': multiselect,
  },
    data(){
        return{

        }
    }    
}
</script>

<style scoped>
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
</style>

<style src="@vueform/multiselect/themes/default.css">
/* https://www.npmjs.com/package/@vueform/multiselect */
</style>