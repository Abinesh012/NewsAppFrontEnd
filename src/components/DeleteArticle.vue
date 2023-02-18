<script>
import axios from 'axios';


export default {
    name:'deleteArticle',
  data() {
    return {
      message:""
    };
  },
  methods: {
    submitForm(article_id) {
      let data={
        article_id:this.article_id
      }
      axios
      .delete(`http://127.0.0.1:5000/deleteArticle/${article_id}`,data,{
        headers:{'content-Type':'application/json',}})
        .then(
        (response)=>{
        if (response.status === 200) {
            this.message = "Article Deleted successfully";
          } 
        else {
            this.message = "In valid Article ID";
          }
          setTimeout(()=>{
            this.message="";
          },3000);
      })
    },
    goBack() {
      window.history.back();
    },
  },
};
</script>


<template>
  <div class="container">
    <h1>Delete Article</h1>
  </div>
  <div class="options-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="Article_id">Article Id:</label>
        <input id="article_id" v-model="article_id" type="number" required>
      </div>
      <div v-if="message" class="message">{{ message }}</div>

      <button type="submit" @click="submitForm(article_id)">Submit</button>
      <button type="button" @click="goBack">Back</button>

    </form>
  </div>
    
  </template>
  
 
<style scoped>
.form-group {    
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: 20px;
}

label {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

input[type="text"],
textarea,
input[type="url"] {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  border-radius: 4px;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 15px;
}

button {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: #2196f3;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0b7dda;
}

header{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);

  margin-bottom: 10px;
  margin-top: 50px;
  display:flex;
  align-items: center;
}
.container{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto; 
  margin-left: 300px;
  margin-top: 50px;
  padding: 50px;
  align-items: center;
  padding-top: 0%;
  background-color: rgba(255, 255, 255, 0.1);

}
.message{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-left: 30px; 
  margin-bottom: 20px;
  font-size: 20px;
  color: rgb(0, 255, 85);
}
 header h1{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  align-items: center;

  margin-right: 30px; 
  font-size: 40px;
}

form{
margin-left: 350px;
}
</style>
  