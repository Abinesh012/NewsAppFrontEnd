<!-- <script setup>
import { defineProps } from 'vue'
const props =defineProps({
  quiz:{
    type:Object,
    required: true
  }
})
</script>
<template>
    <div class="card">
        <img :src="props.quiz.img" alt="">
        <div class="card-text">
            <h2>{{ props.quiz.name }}</h2>
            <p>{{ props.quiz.questions.length }} Articles Available </p>
        </div>
    </div> 
</template>

<style scoped>
.card{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}
/* .card:hover{
  border: 2px solid rgb(0, 204, 255);
} */
.card img{
   width: 100%;
   height: 190Px;
   margin: 0;
}
.card .card-text{
  padding: 0 5px;
}

.card .card-text h2{
  font-weight: bold;
}
</style> -->