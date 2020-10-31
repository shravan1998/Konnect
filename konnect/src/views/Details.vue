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