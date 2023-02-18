<script >
import axios from 'axios';

export default {
    name:'loginView',
  data() {
    return {
      email: '',
      errorMessage: '',
      role:'',
      message:''
    };
  },

  methods: {
      submitForm() {
      let data={
        email:this.email,
        password:this.password
      }
      axios
      .post(`http://127.0.0.1:5000/login`,data,{
        headers:{'Content-Type': 'application/json',}})
      .then(
        (response)=>{
          console.log(response)
          if(response.status===200 ){
            if( response.data.data.role==='admin'){
              this.errorMessage="Login Success, You're In ";
              setTimeout(() => {
                this.$router.push('/admin');
              }, 1500);
            }
            else if(response.data.data.role==='user'){
              this.errorMessage="Login Success, You're In ";
              setTimeout(() => {
                this.$router.push('categoriesView/allArticles');
              }, 1500);
            }
          }
          if(response.status===204){
            this.errorMessage="Oops! Check Your Email and Password ";
          }
          setTimeout(()=>{
            this.errorMessage="";
          },2000);
        }
      )
    },
  },
};
</script>

<template>
 
  <div class="login-container">
    <h1 class="title">Welcome</h1>
    <form class="form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="message" v-if="errorMessage">{{ errorMessage }}</div>
      <button type="submit" class="submit-button" @click.prevent="submitForm">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.title {
  font-size: 32px;
  margin-bottom: 32px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 16px;
  width: 100%;
  max-width: 300px;
}

label {
  font-size: 14px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid gray;
  transition: border-bottom-color 0.2s;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-bottom-color: blue;
  outline: none;
}

.submit-button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: darkblue;
}

.message{
  margin-bottom: 10px;
}
.submit-button:active {
  transform: scale(0.95);
}

</style>
