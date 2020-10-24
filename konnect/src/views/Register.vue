<template >
<div :style="myStyle" id="wrapper">
<v-container >

<div class="card">
  <div class="card-body">
<form>
  <h3>Register To Konnect!</h3>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name" v-model="fname">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" v-model="lname">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
    <div class="form-group">
    <label for="exampleInputPassword2">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" v-model="cpassword">
  </div>
  <button type="submit" class="btn btn-primary" @click.stop.prevent="submit">Submit</button>
  &nbsp;
  <router-link class="btn btn-success" tag="button" to="/login">Login If Already Have An Account</router-link>
   
</form>
  </div>
</div>
</v-container>
</div>
</template>

<script scoped>
import axios from "axios";
import md5 from 'md5'
export default {
    
     data(){
       return{
         myStyle:{
            backgroundColor:"#ffd11a", 
            padding: "300px",
            
            },
            fname:null,
            lname:null,
            email:null,
            password:'',
            cpassword:'',
            id:null
           }
         },
         methods:{
           submit(){
             if(this.email==null){
               this.$alertify.alertWithTitle("Invaild Email","Please Enter Valid Email")
            }else if(this.fname==null)
            {
                this.$alertify.alertWithTitle("Enter First Name","Please Enter Your First Name")
            }else if(this.lname==null)
            {
                this.$alertify.alertWithTitle("Enter Last Name","Please Enter Your Last Name")
            }else if(this.password.length<6 || this.password.length>25){
                this.$alertify.alertWithTitle("Invalid Password","Password Should be of length greater than 6 and less than 25")
              }else if(this.password!=this.cpassword){
                this.$alertify.alertWithTitle("Invalid Password","Password Should be same as Confirm password")
              }
               else{
                axios.post("http://localhost:8000/login",{
                  fname:this.fname,
                  lname:this.lname,
                  email:this.email,           
                  password:md5(this.password),
                  
                }).then(response=>{
                  console.log(response)
                })
             //   this.$localStorage.set('email',this.email)
              // this.$localStorage.set('password',md5(this.password))        
                //this.$session.set('First name',this.fname)
              //  this.$session.set('Last Name',this.lname)
              axios.get("http://localhost:8000/login/"+this.email).then(response=>{
                this.$localStorage.set('id',response.data[0]._id)
                this.id=response.data[0]._id;
                //console.log(response);
              })
              this.$router.push('/details/'+this.id)
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