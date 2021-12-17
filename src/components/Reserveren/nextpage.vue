<template>
    <div>
        <button id="button" class="btn"><span class="btn1">{{ content }}</span></button>
    </div>
</template>

<script>
export default {
    props: ['content', 'styling'],
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
  width: 15vw;
}

/* .btn1:after {
  content: '\279C';
  opacity: 1;
  top: 0;
}

.btn2:before {
  content: '\279C';
  display: inline-block;
  transform: rotate(180deg);
  opacity: 1;
  top: 0;
} */

/* @media screen and (max-width: 400px)  {
  .btn {
    font-size: 0.5rem;
  }
} */
</style>