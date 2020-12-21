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
          <button type="submit" class="btn btn-primary" @click.stop.prevent="submit">Submit</button>
        </form>

        </v-container>
       
  </v-app>
 
    </div>

</template>
<script>
import Navbar from '../components/Navbar'
//import axios from 'axios'
export default {
    name:'Messages',
    components:{
        Navbar
    },
    data(){
      return{
       // slackId:this.$localStorage.get('slackId'),
        isConnected: false,
        message:null,
        socketMessage: ''
      }
    },
    sockets:{
      connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },

    disconnect() {
      this.isConnected = false;
      },
      messageChannel(data) {
      this.socketMessage = data
    }
    },
    methods: {
    submit() {
      // Send the "pingServer" event to the server.
      this.$socket.emit('pingServer', this.message)
    }
  }
}
</script>
