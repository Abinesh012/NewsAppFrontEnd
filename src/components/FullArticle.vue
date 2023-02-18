<script setup>
import{ ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';
import(useRoute)
const route= useRoute()
const articleId=parseInt(route.params.id);
const postData=ref([]);
function getPost(){
  fetch(`http://localhost:5000/getArticleById/${articleId}`)
  .then(response => response.json())
  .then(response=>{
      postData.value=response;
  });
}
onMounted(() =>{
    getPost();
})

</script>
<script>
export default{
    name:'articlePages',
    methods: {
    goBack() {
      this.$router.go(-1);
    },
    printArticle(){
      window.print();
    }
  },
}</script>
<template>
    <div class="news-details">
      <h1>{{ postData.title }}</h1>
      <img v-bind:src="postData.image_url" alt="News Image">  
      <p>Published On : {{ postData?.published_date }}</p>
      <!-- <p v-if="postData.length > 0">Published Date: {{ postData[0].published_date.slice(0, 10) }}</p> -->

      <p> Author : {{ postData?.author?.name }}</p>

      <p>{{ postData.body }}</p>

      <button @click="goBack()">Back</button>
      <button @click="printArticle()">Print</button>

    </div>
  </template>

  
<style scoped>
.news-details {
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  max-width: 750px;
  /* margin: 0 auto; */
  padding: 20px;
  margin-left: 80px;
  margin-top: 50px; 
  padding: 50px;
  padding-top: 0%;
  background-color: rgba(255, 255, 255, 0.1);
}

h1 {
  font-size: 32px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align:center;
  margin-top: 50px;
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 2%;
}

p {
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.5;
  margin-bottom: 20px;
}

button {
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px 20px;
  background-color: #333;
  align-items: center;
  justify-items: center;
  color: #fff;
  border: none;
  /* display: flex; */
  border-radius: 4px;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 30px;
  /* display: flex; */
  /* margin-left: 300px; */
}
</style>