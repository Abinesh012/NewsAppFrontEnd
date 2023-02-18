<script>
import axios from 'axios'
export default {
    name:'createCategory',
  data() {
    return {
      name: "",
      url_link:"",
      message:""
    };
  },
  methods: {
    submitForm() {
      let data={
        name:this.name,
        url_link:this.url_link
      }
      axios
      .post('http://127.0.0.1:5000/addCategory',data,{
        headers:{'Content-Type': 'application/json',}
      })
      .then((response)=>{
        if (response.status === 200) {
            this.message = "Category added successfully";
          } else {
            this.message = "Enter valid data";
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
    <h1>Create New Category</h1>
  </div>
  <div class="options-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="category">Category :</label>
        <input id="author_id" v-model="name" type="text" required>
      </div>
      <div class="form-group">
        <label for="url_link">Category Image Url :</label>
        <input id="url_link" v-model="url_link" type="text" required>
      </div>
      <div v-if="message" class="message">{{ message }}</div>
      <button type="submit">Submit</button>
      <button type="button" @click="goBack">Back</button>
    </form>
  </div>
    
  </template>
  
<style scoped>
.form-group{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* box-shadow: 1px 1px 10px rgba(0,0,0,0.1); */

  margin-bottom: 20px;
}

label {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

input[type="text"],
textarea,
input[type="url"] {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);

  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 15px;
}

button{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: #2196f3;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 20px;
  border-radius: 4px;
  cursor: pointer;
}
/* button[type="button"] {
  background-color: #2196f3;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
} */

button {
  background-color: #0b7dda;
}
/* button[type="button"]:hover {
  background-color: #0b7dda;
} */

header{
  margin-bottom: 10px;
  margin-top: 30px;
  /* display:flex; */
  justify-content: center;
  align-items: center;
  /* font-size: 100px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: 10px;
  margin-top: 50px;
  display:flex;
  align-items: center; */
}
.container{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  max-width: 1000px;
  margin: 0 auto; 
  margin-left: 250px;
  margin-top: 50px;
  padding: 50px;
  align-items: center;
  padding-top: 0%;
  background-color: rgba(255, 255, 255, 0.1);
  /* box-shadow: 1px 1px 10px rgba(0,0,0,0.1); */
  font-size: 20px;

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
  justify-content: center;
  margin-right: 30px; 
}
</style>
  