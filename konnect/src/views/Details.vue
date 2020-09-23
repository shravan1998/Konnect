<template>
   
    <div id="app">
       
    
        
  <v-app id="inspire"
  style="margin-top:-25px;"
  >
        <Navbar />
        <form style="position:absolute;top:10%;">
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
            <v-btn class="mx-2" fab dark color="blue" @click="addEducation()">
            <v-icon dark>mdi-plus</v-icon>
            
            </v-btn>Education Details
            <br>
        <div class="form-row" v-for="(ed,index) in Education" :key="index">
            <label for="institute">Institute</label>
            <input class="form-control" id="institute" type="text" :v-model="ed.institute+index" >
            <br>
            <div class="col">
                <label for="dob">From</label>
                <input type="date" class="form-control" id="from">
            </div>
            <div class="col">
                <label for="dob">To</label>
                <input type="date" class="form-control" id="to">
            </div>
            <br>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
                I currently study here
            </label>
            </div>
            <br>
             <button @click="deleteFind()" class="btn btn-primary">
                 -
            </button>
        </div>
        <br>
         <v-btn class="mx-2" fab dark color="blue" @click="addWork()">
            <v-icon dark>mdi-plus</v-icon>
            
            </v-btn>Work Details
            <br>
            <div class="form-row" v-for="(ed,index) in Work" :key="index">
            <label for="institute">Company</label>
            <input class="form-control" id="institute" type="text" :v-model="ed.company+index" >
            <br>
            <div class="col">
                <label for="dob">From</label>
                <input type="date" class="form-control" id="from">
            </div>
            <div class="col">
                <label for="dob">To</label>
                <input type="date" class="form-control" id="to">
            </div>
            <br>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
                I currently work here
            </label>
            </div>
            <br>
             <button @click="deleteWork()" class="btn btn-primary">
                 -
            </button>
        </div>
        <div class="form-group">
            <label for="music">Profile Music</label>
            <input class="form-control" type="text" placeholder="Enter Spotify URL">
        </div>

  <v-combobox
    v-model="chips"
    :items="items"
    chips
    clearable
    label="Enter interests"
    multiple
   
    solo
  >
    <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong>&nbsp;
        <span>(interest)</span>
      </v-chip>
    </template>
  </v-combobox>

    <button type="submit" class="btn btn-primary">
               Submit
            </button>
           
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
        Education:[],
        Work:[],
        chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
        items: ['Streaming', 'Eating'],
      }
    },methods:{
        addEducation(){
            
            this.Education.push({institute:'institute',to:'to',for:'for',current:'current'});
            //console.log(this.Education);
        },
        deleteFind(){
            this.Education.pop();
        },addWork(){
            
            this.Work.push({company:'company',to:'to',for:'for',current:'current'});
            console.log(this.Work);
        },
        deleteWork(){
            this.Work.pop();
        },
        remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
    }

    
}
</script>