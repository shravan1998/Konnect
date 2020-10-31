<template>
   
    <div id="app">
       
    
        
  <v-app id="inspire"
  style="margin-top:-25px;"
  >
        <Navbar />
        <v-container
        style="position:absolute;top:10%;"
        >
           <form>
          <div class="form-group">
             <label for="exampleFormControlTextarea1">Anything you wanna share?
             </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="post"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" @click.stop.prevent="submit">Submit</button>
        </form>
        <v-row
         v-for="post in posts"
          :key="post._id"
        >
           <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      
      <div class="text--primary">
       
      </div>
    </v-card-text>
    <v-card-actions>
     <q-toggle
        v-model="like"
        color="red"
        label="Like"
        left-label
      />
        </v-card-actions>
         </v-card>
        </v-row>
        </v-container>
       
  </v-app>
 
    </div>

</template>
<script>
import Navbar from '../components/Navbar'
import axios from 'axios'
export default {
    name:'Home',
    components:{
        Navbar
    },
    data(){
      let email = this.$localStorage.get('email')
      let firstName;
      let lastName;
      axios.get("http://localhost:8000/login/"+email).then(response=>{
        firstName = response.data[0].firstName;
        lastName = response.data[0].lastName;
      })    
      return{
        id:this.$localStorage.get('id'),
        post:null,
        firstName:firstName,
        lastName:lastName,
        email:this.$localStorage.get('email'),
        likes:0,
        posts:null
      }
    },
    methods:{
      submit(){
        axios.post('http://localhost:8000/post',{
          id:this.id,
          post:this.post,
          firstName:this.firstName,
          lastName:this.lastName,
          email:this.email,
          likes:this.likes
        }).then(response=>{
          console.log(response);
        })
      }
    }
    
}
</script>

<style scoped>

</style>