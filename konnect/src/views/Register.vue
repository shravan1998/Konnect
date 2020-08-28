<template >
<div :style="myStyle" id="wrapper">
<v-container >

<div class="card">
  <div class="card-body">
<form>
  <h3>Register To Konnect!</h3>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" >
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  &nbsp;
  <router-link class="btn btn-success" tag="button" to="/login">Login If Already Have An Account</router-link>
   
</form>
  </div>
</div>
</v-container>
</div>
</template>

<script scoped>
export default {
     data(){
       return{
         myStyle:{
            backgroundColor:"#ffd11a", 
            padding: "300px",
            
            }
        
           }
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