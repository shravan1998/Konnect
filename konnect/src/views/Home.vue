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
    max-width="500"
  >
    <v-card-text>
      <h4>{{post.firstName}} {{post.lastName}}</h4>
      <div class="text--primary">
       {{post.post}}
      </div>
      
    </v-card-text>
    <v-card-actions>
    
    <v-btn
              icon
              class="icon"
              color="grey"
              v-on:click="likePost"
              id="like"
              
            >
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            <v-btn
      depressed
      color="primary"
    >
      Comment
    </v-btn>
   <v-btn
      depressed
      color="error"
      @click="deletePost(post._id)"
    >
      Delete Post
    </v-btn>
    <v-btn
      tile
      color="success"
    >
      <v-icon left>
        mdi-pencil
      </v-icon>
      Edit
    </v-btn>
        </v-card-actions>
         </v-card>
        <br>
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
    //  let like_button;
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
        like:false,
        posts:null
      }
    },
    mounted(){
      //console.log(this.posts);
      axios.get('http://localhost:8000/posts').then(response=>{
        this.posts=response.data;
        console.log(response);
      });
    },
    methods:{
      submit(){
        console.log(this.post);
        //this.$localStorage.set('post',this.post)
        axios.post('http://localhost:8000/post',{
          id:this.id,
          post:this.post,
          firstName:this.$localStorage.get('firstName'),
          lastName:this.$localStorage.get('lastName'),
          email:this.email,
          likes:this.likes
        }).then(response=>{
          console.log(response);
        })
       axios.get('http://localhost:8000/posts').then(response=>{
        this.posts=response.data;
        console.log(response);
      });
     // console.log(this.posts)
      },
      likePost(event){
       this.color = event.target.style.color = this.color==="grey" ? "orangered" : "grey";
      },
      deletePost(id){
        console.log(id);
        axios.delete('http://localhost:8000/delete-post/'+id).then(response=>{
          console.log(response);
          //this.data();
        });
        axios.get('http://localhost:8000/posts').then(response=>{
          this.posts=response.data;
          console.log(response);
      });
      }
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