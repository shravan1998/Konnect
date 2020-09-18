
<template>
<div :style="myStyle" id="wrapper">

<v-container>

<div class="card">
  <div class="card-body">
<form>
  <h3>Welcome Back To Konnect!</h3>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" >
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  &nbsp;
  <router-link class="btn btn-success" tag="button" to="/register">Register If You Don't Have The Account Yet</router-link>
   
</form>
  </div>
</div>
</v-container>
</div>
</template>

<script scoped>
import axios from 'axios';
export default {
     data(){
       return{
         myStyle:{
            backgroundColor:"#ffd11a", 
            padding: "300px",
            
            }
        
           }
         },
      mounted(){
        axios.post('/login')
      }
}
</script>
<style scoped>
.card-body{
    background-color: #000033;
    color: white;
}
label,small{
    color: white;
}
#wrapper{
    margin-top: -30px;
}
</style>