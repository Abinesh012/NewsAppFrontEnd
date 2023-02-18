
<template>
    <div class="container">
      <h1>Update Article</h1>
    </div>
    <div class="options-container">
      <form @submit.prevent="postData">
        <div class="form-group">
          <label for="id">Article ID:</label>
          <input id="id" v-model="id" type="number" required class="idBar">
          <button type="button" @click.prevent="fetchArticleData" class="fetchButton">Fetch Article</button>
          <div v-if="fetchmessage" class="fetchmessage">{{ fetchmessage }}</div>
        </div>
        <div class="form-group">
          <label for="author_id">Author ID:</label>
          <input id="author_id" v-model="author_id" type="text" required>
        </div>
        <div class="form-group">
          <label for="category_id">Category ID:</label>
          <input id="category_id" v-model="category_id" type="text" required>
        </div>
        <div class="form-group">
          <label for="title">Title:</label>
          <input id="title" v-model="title" type="text" required>
        </div>
        <div class="form-group">
          <label for="body">Body:</label>
          <textarea id="body" v-model="body" required class="newsBody"></textarea>
        </div>
        <div class="form-group">
          <label for="imageurl">Image URL:</label>
          <input id="image_url" v-model="image_url" type="text" >
        </div>
        <div v-if="message" class="message">{{ message }}</div>
        <button type="submit">Submit</button>
        <button type="button" @click="reset">Reset</button>
        <button type="button" @click="goBack">Back</button>
      </form>
    </div>
</template>

  <script>
  import axios from 'axios'
  export default {
    name:'updateArticle',
    data() {
      return {
        id:"",
        author_id: "",
        category_id: "",
        title: "",
        body: "",
        status:"",
        image_url: "",
        message:""
      }
    },
    methods: {
        postData() {
            let data = {
            author_id: this.author_id,
            category_id: this.category_id,
            title: this.title,
            body: this.body,
            status:1,
            image_url: this.image_url
        }
        axios 
        .put(`http://localhost:5000/updateArticle/${this.id}`,data ,{
          headers: {'Content-Type': 'application/json'},})
        .then(
            (response)=>{
                if(response.status===200){
                    this.message = "Article Updated successfully";
                }else{
                    this.message = "Enter valid Article Id";
                }setTimeout(()=>{
                    this.message="";
                    },3000);
            });
      },
      fetchArticleData() {
      axios
        .get(`http://localhost:5000/getArticleById/${this.id}`)
        .then((response) => {
          if (response.status === 200 &&response.data) {
            this.fetchmessage = "Successfully Fetched Article Details";
            const articleData = response.data;
            this.author_id = articleData.author_id;
            this.category_id = articleData.category_id;
            this.title = articleData.title;
            this.body = articleData.body;
            this.image_url = articleData.image_url;
          }
          else{
            this.fetchmessage = "Enter Correct Article Id";
          }  setTimeout(() => {
                this.fetchmessage = ''
            }, 3000)
        })
    },
      goBack() {
      window.history.back();
    },
    reset() {
        this.author_id = ''
        this.category_id = ''
        this.title = ''
        this.body = ''
        this.image_url = ''
    }
    }, mounted() {
    this.fetchArticleData()
  }
  };
  </script>
   
<style scoped>
.form-group {    
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: 20px;
  margin-left: 100px;
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
  width: 80%;
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
  margin-left: 100px;
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
  /* font-weight: bold; */
  align-items: center;
  justify-content: center;
  margin-left: 150px; 
  margin-bottom: 20px;
  font-size: 20px;
  color: rgb(0, 255, 85);
}
.fetchmessage{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* font-weight: bold; */
  align-items: center;
  justify-content: center;
  margin-left: 30px; 
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 20px;
  color: rgb(0, 0, 0);
}
 header h1{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  align-items: center;
  margin-right: 30px; 
  font-size: 40px;
}
.newsBody{
  height: 200px;
}
.idBar{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  height: 40px;
  width:64%
}
.fetchButton{
  margin-left: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
</style>
  