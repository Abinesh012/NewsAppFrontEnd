<script setup >
import{ ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route= useRoute()
const postData=ref([]);
var category=route.params.name;
const numCards = ref(3);


function getPost(){
  if(category=="allArticles"){
    category="Articles"
    fetch(`http://localhost:5000/getAllArticle`)
  .then(response => response.json())
  .then(response=>{
      postData.value=response;
  });

  }
  else{
    fetch(`http://localhost:5000/getArticleByCategory/${category}`)
  .then(response => response.json())
  .then(response=>{
      postData.value=response;
  });

  }
  
}

// function navigateToArticle(id){
//   // const router= useRouter()
//   console.log(id,"...........................................................................")
//   console.log(`/article/${id}`)
//   console.log(id,"...........................................................................")

//   this.$router.push(`/article/${id}`)
// }
onMounted(() =>{
    getPost();
});

function loadMore(){
  numCards.value+=3;
}

// function goBack() {
//   this.$router.push('/categoriesView');
// }

</script>  


<script>
export default{
  name:'categoryNews',
  data()
  {
  },
  methods:{
    navigateToArticle(id){
      this.$router.push(`/article/${id}`)
  },
  // goBack(){
  //   // this.$router.push('/categoriesView');
  //   this.$router.go(-1);
  // },
  gotoCategories(){
    this.$router.push('/categoriesView');
    // this.$router.go(-1);

  },
  // gotoHome(){
  //   this.$router.push('/categoriesView/allArticles');
  //   // this.$router.go(-1);

  // },
  logOut(){
    this.$router.push('/');
    // this.$router.go(-1);

  }

  
}}
</script>
<template>
    <div class="container">
      <header class="header">
        <img class="header-image" src="https://thumbs.dreamstime.com/b/newspaper-globe-texture-white-background-59754219.jpg" alt="Header Image">
        <h1 class="header-name">{{category}}</h1>

    

      </header>
      <!-- <button @click="goBack">Back</button> -->
 
      <!-- <button @click="gotoHome" class="categories">Home</button> -->
      <button @click="gotoCategories" class="categories">All Categories</button>


      <div class="card-container">
        <div v-for="(postdata) in postData.slice(0,numCards)" :key="postdata.id" class="card" @click="navigateToArticle(postdata.id)"  >
          <img class="card-image" :src="postdata.image_url" alt="Card Image" >
          <h2 class="card-title">{{ postdata.title }}</h2>
          <p class="card-author">Author : {{ postdata.author.name }}</p>
          <!-- <p class="card-body">{{ postdata.body }}</p> -->
        </div>
      </div>
      <div class="load-more">
      <button v-if="numCards < postData.length" @click="loadMore" class="loadMore">Load More</button>
      <p class="status" v-else>No More Articles</p>
      <!-- <button @click="goBack">Back</button> -->
      <button @click="logOut" class="logout">Log Out</button>
    </div>
    </div>
  </template>
 
<!-- 
  <script>
// import { text } from 'body-parser';

  export default {
    name:'categoryNews',
    data() {
      return {
        cards: [
          {
            id: 1,
            imageUrl: "https://images.indianexpress.com/2023/02/chatgpt-featured3-1.jpg",
            title: "MeitY may soon integrate ChatGPT with WhatsApp for key government schemes",
            body: "gdcgggfshvhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhh  hhhhhhhhhhhhhh  hhhhhhhhh hhhhhhhhhh hhhhhhh hhhhh",
            author: "Abinesh S"
          },
          {
            id: 2,
            imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/rtx5sqbx-sixteen_nine.jpg?VersionId=3C7TQ4kh37CaINQPdjGZSeEmdkQ2viyJ&size=690:388",
            title: "Microsoft co-founder Bill Gates says ChatGPT will change the world by making office jobs more efficient",
            body: "xshbdjhcshjebvjdbvkjhwbekj vhbwkjhcebjebhjvb fbbbbbbbbbbbbbbb   bbbbbbb bbbbbbbbbbbbb bbbbbbbbbbbbbbbb bbbbbbb bbbbbb",
            author: "Prashanth N"
          },
          {
            id: 3,
            imageUrl: "https://images.indianexpress.com/2023/02/WhatsApp-Express-Photo-2.jpg",
            title: "WhatsApp introduces new Kept Messages feature, here’s how it works",
            body: "chiuheivuhwbtviuhcb iufhbiuehbvi wuchbcvhubiufbvi uewhbxhebh jvebhuvbfu xhbvhur wbuv 3trbubv3b rutvnrt vnh3h otngu3h troghd",
            author: "Dhayaalan J"
          }
        ]
      };
    }
  };
  </script>
   -->
<!-- <script setup>
import { onMounted,ref } from 'vue';
const postData=ref([])
const getPost=async()=>{
    return fetch('/getArticleByCategory/technology')
    .then(response=>response.json())
}
onMounted(()=>{
    getPost().then(data=>{
        postData.value=data
    })
})

</script> -->
  <style scoped>
  .container{
  max-width: 900px;

  margin: 0 auto; 
  padding: 0px;
  padding-top: 0%;
  background-color: rgba(255, 255, 255, 0.1);
}
  .header {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    font-size: 25px;
    margin-right: 10px;
    margin-left: 10px;
    padding: 5px;
    margin-top: 30px;
    align-items: left;
    justify-content: center ;
    margin-bottom: 20px;
    background-color: #333;
    color: #fff;

  }
  
  .header-image {
    height: 100px;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 20%;
    background-color: rgba(255, 255, 255, 0.1);

  }
  
  .card-container {
    /* display:list-item; */
    flex-wrap: wrap;
    width: 48.5%;
    /* margin-bottom: 50px; */
  }
  
  .card {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: larger;
    margin-top: 30px;
    /* margin-bottom: 35px; */
    flex: 1 1 300px;
    margin-left: 14px;
    /* margin: 10px; */
    overflow: hidden;
    padding: 20px;
    /* background-color: #4A4A4A; */
    /* background-color: #2b2424;
    color: #fff; */
    /* background-color: rgba(255, 255, 255, 0.1); */
    /* background-color: #ffffff; */
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    border-radius: 5px;
    cursor: pointer;
    width: 190%;
    border-radius: 1%;
    justify-content: center;
    align-items: center;
    /* bottom: 5px; */
  }
  
  .card-image {
    display: flex;
    height: 300px;
    margin-left: 100px;
    margin-bottom: 10px;
    border-radius: 1.5%;
    width: 80%;
    align-items: center;
    justify-content: center;

  }

  
  .card-title {
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 100px;
    margin-right: 100px;

  }
  .card-body {
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 100px;
    margin-right: 100px;

  }
  
  .card-body {
    margin-bottom: 15px;
    margin-left: 100px;
    align-items: center;
  }
  
  .card-author {
    font-style: italic;
    text-align: left;
    align-items: center;
    margin-left: 100px;
  }
  template{
    color: rgba(255, 255, 255, 0.1);
  }
  .card.v-lazy-loaded {
  opacity: 1;
  transform: translateY(0);
}

button {
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px 20px;
  background-color: #333;
  margin-left: 230px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center; 
  justify-items: center;  
  color: #fff;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.loadMore{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 30px;
  margin-left: 390px;
  margin-right: 300px;
  margin-bottom: 20px;
}
.categories{
  width: 90%;
  /* font-weight:bold; */
  margin-left: 5%;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;


}

.status {
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 375px;
    margin-right: 100px;
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .logout{
    margin-left: 400px;
  }
  </style>
  