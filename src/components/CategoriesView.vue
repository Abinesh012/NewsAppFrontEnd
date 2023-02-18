<!-- <script setup>
// import quiz from "../data/quizes.json"
// import {ref,watch} from "vue"
// import {useRouter} from 'vue-router'
// const category=ref("Categories")
// const search=ref("")
// watch(search,()=>{
//   Categories.value=category.filter(category => category.name.toLowerCase().includes(search.value.toLowerCase()))
// })

// export default {
//       name:'allCategories',
//     data() {
//       return {
//        postData:[]
//       };
//     },
//   created(){
//       this.getPost()
//   },
//     methods: {
//       getPost(){
//       fetch('')
//       .then(response => response.json())
//       .then(response=>{
//           this.postData=response
//           console.log(response)
//       }) 
//   },
//     },
//   };

</script> -->
<script>
import axios from 'axios'

export default{
  name:"categoriesView",
  data(){
    return{
      Categories:[],
      search:""
    }
  },
  mounted(){
    axios.get('http://localhost:5000/getAllCategories')
    .then(response=> this.Categories=response.data)
  },
  computed: {
    filteredCategories() {
      return this.Categories.filter(category =>
        category.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods:{
    navigateToCategory(category){
      this.$router.push(`/categoriesView/${category.name}`)
    },
    goBack(){
    // this.$router.push('/');
    this.$router.go(-1);
  },
  logOut(){
    this.$router.push('/');
  }
  }
}</script>


<template >
  <div >
    <header class="container">
      <h1>Categories</h1>
      <input v-model.trim="search" type="text" placeholder="Search Categories here ..." class="search">
    </header>
   

    <div class="options-container">
      <div v-for="category in filteredCategories" :key="category.id" class="card" @click="navigateToCategory(category)">
        <img :src="category.url_link" alt=""/>
        <div class="card-text">
            <h2>{{ category.name }}</h2>
        </div>
    </div> 
 

    </div>
    <button @click="goBack">Back</button>
    <button @click="logOut">Log Out</button>
  </div>
</template>



<style scoped>
header{
  margin-bottom: 10px;
  background-color: #333;
  /* margin-top: 30px; */
  display:flex;
  text-align: center;
  justify-items: center;
  align-items: center;
}
.container{
  max-width: 1000px;
  /* margin: 0 auto;  */
  margin-right: 110%;
  /* margin-bottom: 100px; */
  border-radius: 3px;
  background-color: #333;
  /* padding: 50px; */
  padding-top: 0%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  /* background-color: rgba(255, 255, 255, 0.1); */
}
header .container{
  background-color: #333;

}
header h1{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* font-weight: bold; */
  /* margin-top: 70px; */
  margin-right: 30px;
  margin-left: 300px;
  font-size: 80px;
  /* font-size: 500px; */
  /* background-color: #333; */
  /* font-size:xx-large; */
  text-align: center;
  align-items: center;
  font-size: 40px;
}
header input{
  border: none;
  /* background-color: rgba(128,128,128,0.1); */
  /* background-color: #fff; */
  color: #0d0d0d;
  padding:10px;
  font-size:14px;
  margin-left: 5px;
  border-radius: 10px;
}
header input::placeholder {
  color:black;
}

header .search{
  color: #010101;
}
.container{
  background-color: #333;
  color:#fff;
  max-width: 1000px;
  margin: 0 auto; 
  /* padding: 50px; */
  padding-top: 0%;
  /* overflow: hidden; */
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  /* background-color: rgba(255, 255, 255, 0.1); */

}
.options-container{
  /* background-color: #333; */
  display: flex;
  flex-wrap: wrap;
  margin-left: 4px;
  /* margin-top: 50px; */
  margin-top: 40px;
}
.card{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  margin-left: 2px;
  cursor: pointer;

}
.card:hover{
  box-shadow: 2px solid rgb(0, 145, 255);
}
.card img{
   width: 100%;
   height: 190Px;
   margin: 0;
}
.card .card-text{
  padding: 0 5px;
  margin-left: 20px;


}

.card .card-text h2{
  margin-left: 80px;
  font-weight: bold;

}
button {
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px 20px;
  background-color: #333;
  margin-left: 250px;
  margin-top: 30px;
  justify-content: center; 
  justify-items: center;  
  color: #fff;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.search{
  margin-top: 9px;
  color: #d7d7d7;
}
</style>