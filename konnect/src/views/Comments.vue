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
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="post"></textarea>
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
      likePost(event,id,user_id){
       this.color = event.target.style.color = this.color!=="orangered" ? "orangered" : "grey";
       if(user_id!==id){
         axios.get('http://localhost:8000/post/'+id).then(response=>{
          this.likes=response.data.likes;
          console.log(response.data.likes);
      });
       }
       if(this.color==="orangered"){
         this.like = true;
         this.likes++;
       }else{
         this.like=false;
         this.likes--;
       }
       console.log(id);
      axios.patch('http://localhost:8000/like-post/'+id,{
         likes:this.likes
       }).then(response=>{
         console.log(response);
       });
        axios.get('http://localhost:8000/posts').then(response=>{
          this.posts=response.data;
          console.log(response);
      });
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