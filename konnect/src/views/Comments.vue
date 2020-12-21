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
             <label for="exampleFormControlTextarea1">Comment
             </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comment"></textarea>
          </div>
          <button type="submit" class="btn btn-success" @click.stop.prevent="submit">Comment</button>
        </form>
      

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
 
     
      return{
        userid:this.$localStorage.get('id'),
        comment:null,
        post_id:this.$localStorage.get('post_id'),
        fname:this.$localStorage.get('first_name'),
        lname:this.$localStorage.get('last_name'),
        comments:null
      }
    },
    mounted(){
      //console.log(this.posts);
     
    },
    methods:{
      submit(){
       axios.post('http://localhost:8000/comment',{
         'user_id':this.userid,
         'post_id':this.post_id,
         'comment':this.comment
         
       }).then(response=>{
         console.log(response);
       });
      },
      
    }
    
}
</script>

<style scoped>
v-btn{
  color: white;
}

.icon:after{
  color: orangered;
}

</style>