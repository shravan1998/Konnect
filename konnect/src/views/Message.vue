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
            
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" @click.stop.prevent="sendMessage">Submit</button>
        </form>
        <div class="card mt-3">
      <div class="card-body">
          <div class="card-title">
              <h3>Messenger</h3>
              <hr>
          </div>
          <div class="card-body">
              <div class="messages" v-for="(msg, index) in messages" :key="index">
                  <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
              </div>
          </div>
      </div>
        </div>

        </v-container>
       
  </v-app>
 
    </div>

</template>
<script>
import Navbar from '../components/Navbar'
//import axios from 'axios'
import io from 'socket.io-client';
export default {
    name:'Messages',
    components:{
        Navbar
    },
    data(){
      return{
        user: this.$localStorage.get('firstName')+" "+this.$localStorage.get('lastName'),
        message: '',
        messages: [],
        socket : io('localhost:8000', { transport : ['websocket'] })
      }
    },
  
    methods: {
    sendMessage(e) {
            e.preventDefault();
            
            this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                message: this.message
            });
            this.message = ''
        }
  },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
            this.messages = [...this.messages, data];
            // you can also do this.messages.push(data)
        });
    }
}
</script>
