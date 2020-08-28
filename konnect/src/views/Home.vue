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
             <label for="exampleFormControlTextarea1">Post something here</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
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
//import axios from 'axios'
export default {
    name:'Home',
    components:{
        Navbar
    },
    data(){
      return{
       // slackId:this.$localStorage.get('slackId'),
        tasks:null
      }
    },

    
}
</script>

<style scoped>

</style>