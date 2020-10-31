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
      <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="display-1 text--primary">
        be•nev•o•lent
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
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
        lastName:lastName
      }
    },
    methods:{
      submit(){

      }
    }
    
}
</script>

<style scoped>

</style>