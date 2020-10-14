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
                <input type="date" class="form-control" id="dob" v-model="dob">
                </div>
                <div class="col">
                 <label for="exampleFormControlSelect1">Relationship Status</label>
                    <select class="form-control" id="exampleFormControlSelect1" v-model="relations">
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>In a Relationship</option>
                   
                    </select>
                </div>
            </div>
            <div class="form-check">
               
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Male" v-model="gender">
            <label class="form-check-label" for="exampleRadios1">
               Male
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Female" v-model="gender">
            <label class="form-check-label" for="exampleRadios2">
                Female
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Others" v-model="gender">
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
        <div class="form-group">
            <label for="music">Profile Music</label>
            <input class="form-control" type="text" placeholder="Enter Spotify URL" v-model="music">
        </div>

  <v-combobox
    v-model="interests"
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

    <button type="submit" class="btn btn-primary" @click.stop.prevent="submit">
               Submit
            </button>
           
        </form>
       
  </v-app>
 
    </div>

</template>
<script>
import Navbar from '../components/Navbar'
import axios from 'axios'
export default {
    name:'Details',
    components:{
        Navbar
    },
    data(){
      return{
       // slackId:this.$localStorage.get('slackId'),
        dob:null,
        relations:null,
        gender:null,
        music:null,
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
        jobData:[],
        interests: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
        items: ['Streaming', 'Eating'],
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
        remove (item) {
        this.interests.splice(this.interests.indexOf(item), 1)
        this.interests = [...this.interests]
      },
      submit(){
          console.log(this.jobData);
          console.log(this.eduData);
          console.log(this.$route.query);
          //console.log(this.interests);
          if(this.institute==null && this.eduFrom==null && this.eduTo==null){
               this.eduData.push({
                        institute:this.institute,
                        eduFrom:this.eduFrom,
                        eduTo:this.eduTo,
                        eduCurrent:this.eduCurrent
                })
          }
          if(this.company==null && this.jobFrom==null && this.jobTo==null){
               this.jobData.push({
                        institute:this.company,
                        eduFrom:this.jobFrom,
                        eduTo:this.jobTo,
                        eduCurrent:this.eduCurrent
                })
          }
          
           
              axios.post("http://localhost:8000/user/email="+this.$route.query.email,{
                 
                  dob: this.dob,
                  relation: this.relations,
                  gender: this.gender,
                  music: this.music,
                  interest: this.interests,
                  

              }).then(response=>{
                  console.log(response)
                });

        
      }
    }

    
}
</script>