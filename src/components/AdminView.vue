<script scoped>

export default {
    name:'AdminView',
  data() {
    return {
     postData:[]
    };
  },
  

created(){
    this.getPost()
    console.log("created")
},
  methods: {
    getPost(){
    fetch('/getAllArticle')
    .then(response => response.json())
    .then(response=>{
        this.postData=response.data
        console.log(response.data)
    }) 

},
goBack(){
    this.$router.push('/');
  }
  },
};
</script> 
  
<template >
  <div >
    <header class="container">
      <h1><centre>Admin Controller</centre></h1>
    </header>
    <div class="options-container">
      <div class="card"  @click="this.$router.push('/createCategory')">
        <img src="../assets/createCategory.jpg" alt="">
        <div class="card-text">
          <h2> Create New Category</h2>
        </div>
      </div>
      <div class="card" @click="this.$router.push('/createArticle')">
        <img src="../assets/CreateArticle.jpg" alt="">
        <div class="card-text" >
          <h2> Create New Article</h2>
        </div>
      </div>
      <div class="card" @click="this.$router.push('/updateArticle')">
        <img src="../assets/updateArticle.jpg" alt="">
        <div class="card-text" >
          <h2> Update Articles</h2>
        </div>
      </div>
      <div class="card" @click="this.$router.push('/deleteArticle')">
        <img src="../assets/DeleteArticle.jpg" alt="">
        <div class="card-text">
          <h2> Delete Article</h2>
        </div>
      </div>
      <div class="card" @click="this.$router.push('/categoriesView')">
        <img src="../assets/news.jpg" alt="">
        <div class="card-text">
          <h2> View Articles</h2>
        </div>
      </div>
      
    </div>
    <button @click="goBack">Log Out</button>
  </div>
</template>

<style scoped>
header{
  margin-bottom: 10px;
  margin-top: 50px;
  display:flex;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  align-items: center;
}
.container{
  max-width: 1000px;
  margin: 0 auto; 
  padding: 50px;
  align-items: center;
  padding-top: 0%;
  background-color: rgba(255, 255, 255, 0.1);

}
header h1{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  align-items: center;
  justify-items: center;
  margin-left: 305px;
  margin-top: 50px;

  /* margin-right: 30px; */
  font-size: 40px;
}
header input{
  border: none;
  background-color: rgba(128,128,128,0.1);
  padding:10px;
  border-radius: 5px;
  
}
/* .container{
  max-width: 1000px;
  margin: 0 auto; 
  padding: 50px;
  padding-top: 0%;
  background-color: rgba(255, 255, 255, 0.1);

} */

.options-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

.card{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  text-align: center;
  cursor: pointer;
}
/* .card:hover{
  border: 2px solid rgb(0, 204, 255);
} */
.card img{
   width: auto;
   height: 190Px;
   margin: 0;
}
.card .card-text{
  padding: 0 5px;
}

button {
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px 20px;
  background-color: #333;
  margin-left: 450px;
  margin-top: 30px;
  justify-content: center; 
  justify-items: center;  
  color: #fff;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.card .card-text h2{
  font-weight: bold;
}
</style>