<template>
    <div>
        <button class="btn" @click="this.$store.commit('subtracked')"><span>Vorige stap </span></button>
    </div>
</template>

<script>
export default {
    data(){
        return{
          
        }
    },
    methods: {

    },
}
</script>

<style scoped>
.btn{
  display: inline-block;
  border-radius: 4px;
  background-color: #CF4D36;
  border: none;
  color: #FFFFFF;
  padding: 10px;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
  margin-top: 1em;
  width: 14vw;
}

.btn span:before {
  content: '\279C';
  display: inline-block;
  transform: rotate(180deg);
  opacity: 0;
  top: 0;
  margin-right: 5px;
  transition: 0.5s;
}

.btn:hover span:before {
  opacity: 1;
  left: 0;
}
</style>