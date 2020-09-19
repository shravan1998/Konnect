<template>
   
    <div id="app">
       
    
        
  <v-app id="inspire"
  style="margin-top:-25px;"
  >
        <Navbar />
        <form style="position:absolute;top:10%;right:45%;">
            <div class="form-row">
                <div class="col">
                <label for="dob">Date Of Birth</label>
                <input type="date" class="form-control" id="dob">
                </div>
                <div class="col">
                 <label for="exampleFormControlSelect1">Relationship Status</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>In a Relationship</option>
                   
                    </select>
                </div>
            </div>
            <div class="form-check">
               
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
            <label class="form-check-label" for="exampleRadios1">
               Male
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
                Female
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
            <label class="form-check-label" for="exampleRadios3">
                Others
            </label>
            </div>
            <v-btn class="mx-2" fab dark color="blue" @click="addEducation">
            <v-icon dark>mdi-plus</v-icon>
            
            </v-btn>Education Details
        <div v-for="(ed,index) in Education" :key="index">
            
            <input type="text" :v-model="ed.value">
             <button @click="deleteFind(index)">
            </button>
        </div>
           
        </form>
       
  </v-app>
 
    </div>

</template>
<script>
import Navbar from '../components/Navbar'
//import axios from 'axios'
export default {
    name:'Details',
    components:{
        Navbar
    },
    data(){
      return{
       // slackId:this.$localStorage.get('slackId'),
        Education:[]
      }
    },methods:{
        addEducation(){
            
            this.Education.push({value:''});
        }
    }

    
}
</script>