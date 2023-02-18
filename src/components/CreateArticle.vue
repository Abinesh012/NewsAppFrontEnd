<template>
  <div class="container">
    <h1>Create New Article</h1>
  </div>
  <div class="options-container">
    <form @submit.prevent="postData" ref="form">
      <div class="form-group">
        <label for="author_id">Author:</label>
        <select id="author_id" v-model="author_id">
          <option value="">Select Author</option>
          <option v-for="author in authors" :value="author.id" :key="author.id">{{ author.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="category_id">Category:</label>
        <select id="category_id" v-model="category_id" @click="getCategoryList">
          <option value="">Select Category</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="title">Title:</label>
        <input id="title" v-model="title" type="text" required>
      </div>
      <div class="form-group">
        <label for="body">Body:</label>
        <textarea id="body" v-model="body" required></textarea>
      </div>
      <div class="form-group">
        <label for="image_url">Image URL:</label>
        <input id="image_url" v-model="image_url" type="text" required>
      </div>
      <div v-if="message" class="message">{{ message }}</div>

      <button type="submit">Submit</button>
      <button type="button" @click="resetForm">Reset</button>
      <button type="button" @click="goBack">Back</button>
    </form>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name:'createArticle',
  data() {
    return {
      author_id: "",
      category_id: "",
      title: "",
      body: "",
      status:"",
      image_url: "",
      message:"",
      categories: [],
      authors: []
    };
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
      axios.post('http://127.0.0.1:5000/addArticle', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        if (response.status === 200) {
          this.message = "Article added successfully";
        } else {
          this.message = "Enter valid data";
        }
        setTimeout(() => {
          this.message = "";
        }, 3000);
      })
    },
    resetForm() {
      this.author_id = "";
      this.category_id = "";
      this.title = "";
      this.body = "";
      this.status = "";
      this.image_url = "";
    },
    goBack() {
      window.history.back();
    },
    getCategoryList() {
      axios.get('http://localhost:5000/getAllCategories').then(response => {
        this.categories = response.data;
      }).catch(error => {
        console.log(error);
      });
      axios.get('http://localhost:5000/getAllAdmin').then(response => {
        this.authors = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    this.getCategoryList();
  }
};
</script>



  
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

select {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }
  select option {
    font-size: 16px;
    padding: 10px;
    background-color: #fff;
    color: #333;
  }
  select:focus {
    outline: none;
    border-color: #6d9ed6;
  }

</style>
  