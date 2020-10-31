<template>
   
    <div id="app">
       
    
        
  <v-app id="inspire"
  style="margin-top:-25px;"
  >
        <Navbar />
        <v-container
        style="position:absolute;top:10%;"
        fluid
        >
         <v-card
    class="mx-auto"
    max-width="800"
    fluid
    tile
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col>
            <button type="button" class="btn clr">Add Friend</button>
            &nbsp;
            <button type="button" class="btn clr">Message</button>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
           <form>
          <div class="form-group">
             <label for="exampleFormControlTextarea1">So What's Up?</label>
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
        <v-btn class="mx-2" fab dark color="blue" @click="addEducation()">
            <v-icon dark>mdi-plus</v-icon>
            
            </v-btn>Education Details
            <br>
        <div class="form-row" v-for="(ed,index) in Education" :key="index">
            <label for="institute">Institute</label>
            <input class="form-control" id="institute" type="text" name="institute" v-model="institute" >
            <br>
            <div class="col">
                <label for="dob">From</label>
                <input type="date" class="form-control" id="from" name="fromEdu" v-model="fromEdu">
            </div>
            <div class="col">
                <label for="dob">To</label>
                <input type="date" class="form-control" name="toEdu" id="to" v-model="toEdu">
            </div>
            <br>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="defaultCheck1" value="false" v-model="eduCurrent">
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
            <input class="form-control" id="institute" type="text" name="company" v-model="company" >
            <br>
            <div class="col">
                <label for="dob">From</label>
                <input type="date" class="form-control" id="from" name="jobFrom" v-model="jobFrom">
            </div>
            <div class="col">
                <label for="dob">To</label>
                <input type="date" class="form-control" id="to" name="jobTo" v-model="jobTo">
            </div>
            <br>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="true" id="defaultCheck1" v-model="jobCurrent">
            <label class="form-check-label" for="defaultCheck1">
                I currently work here
            </label>
            </div>
            <br>
             <button @click="deleteWork()" class="btn btn-primary">
                 -
            </button>
        </div>
  </v-app>
 
    </div>

</template>
<script>
import Navbar from '../components/Navbar'
//import axios from 'axios'
export default {
    name:'Profile',
    components:{
        Navbar
    },
    data(){
      this.$localStorage.remove('id')
      return{
       // slackId:this.$localStorage.get('slackId'),
        tasks:null,
        Education:[],
        company:null,
        jobFrom:null,
        jobTo:null,
        jobCurrent:false,
        institute:null,
        fromEdu:null,
        toEdu:null,
        eduCurrent:false,
        Work:[],
        eduData:[],
        jobData:[]
      }
    },methods:{
      addEducation(){
            
            this.Education.push({institute:'institute',to:'to',from:'from',current:'current'});
            //console.log(this.Education);
            if(this.Education.length>0){
                this.eduData.push({
                        institute:this.institute,
                        eduFrom:this.eduFrom,
                        eduTo:this.eduTo,
                        eduCurrent:this.eduCurrent
                })
            }
        },
        deleteFind(){
            this.Education.pop();
            this.eduData.pop();
        },addWork(){
            
            this.Work.push({company:'company',to:'to',from:'from',current:'current'});
            console.log(this.Work);
            if(this.Work.length>0){
                this.jobData.push({
                        company:this.company,
                        jobFrom:this.jobFrom,
                        jobTo:this.jobTo,
                        jobCurrent:this.jobCurrent
                })
            }
        },
        deleteWork(){
            this.Work.pop();
            this.jobData.pop();
        },
    }

    
}
</script>

<style scoped>
.clr{
    background-color: #ffd11a;
}
</style>