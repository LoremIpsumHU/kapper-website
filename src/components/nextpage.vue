<template>
    <div>
        <button class="btn"><span>Volgende stap </span></button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style>
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
}

.btn span:after {
  content: '\279C';
  opacity: 0;
  top: 0;
  margin-left: 5px;
  transition: 0.5s;
}

.btn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>