<template>

  <v-app><Nav calender='1' />
    <div
      class="ma-4"
      style="height: 100%"
    >
   <v-col cols="auto" max-height="800">
      <v-dialog v-model="dialog"
        transition="dialog-top-transition"
        max-width="1000"
        height="800"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="purple"
            v-bind="attrs"
            v-on="on"
          >Book</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="purple"
              dark
            >Book your appointment</v-toolbar>
            <v-card-text>
              <div class="text-h5 pa-3 space">
                <input v-model="name" placeholder="Name of Appointment "/>
              </div>
                <p v-if="!nameIsValid" class="errorMessage">Insert your name</p>
              <template>
                <v-row>
                            <v-col
                            cols="5"
                            sm="4"
                            md="4"
                          class="space"
                            >
                              <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                                color="purple"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="date"
                                    label="choose date"
                                    prepend-icon="mdi-calendar"
                                    color="purple"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date"
                                  @input="menu2 = false"
                                  color="purple"
                                ></v-date-picker>

                              </v-menu><p v-if="!DateIsValid" class="errorMessage">please pick date</p>
                            </v-col>

                            <v-col
                            cols="5"
                            sm="3"
                            md="4"
                            >
                            <v-menu
                              ref="menu"
                              v-model="menu"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              :return-value.sync="time"
                              transition="scale-transition"
                              offset-y
                              color="purple"
                              max-width="290px"
                              min-width="290px"
                            >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="time"
                                label="time of appointment"
                                prepend-icon="mdi-clock-time-four-outline"
                                readonly color="purple"
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-time-picker
                              v-if="menu"
                              v-model="time"
                              full-width color="purple"
                              @click:minute="$refs.menu.save(time)"
                            ></v-time-picker>
                          </v-menu>
                          <p v-if="!TimeIsValid" class="errorMessage">please pick time</p>
                          </v-col>
              </v-row>
              <div>
              <template>
                    <v-container fluid>
                          <v-row align="center">
                            <v-col md="4" sm="3" cols="3" class="pa-2 space">
                                    <v-select @click="getservices"
                                      v-model="doctor"
                                      :hint="`Doctor:(first name, last name)`"
                                      :items="doctors"
                                      item-text="first_name"
                                      item-value="id"
                                      persistent-hint
                                      single-line
                                    ></v-select>
                            </v-col>
                                    <p v-if="!DoctorIsValid" class="errorMessage"></p>
                            <v-col cols="3" md="4" sm="3" class="pa-2">
                                    <v-select 
                                      v-model="service"
                                      :hint="`Services`"
                                      :items="services"
                                      item-text="name"
                                      item-value="id"
                                      persistent-hint
                                      single-line
                                    ></v-select>
                                    <p v-if="!ServiceIsValid" class="errorMessage"></p>
                            </v-col>
                            <!-- {{date}} {{time}} -->
                          </v-row>
                        </v-container>
                </template>
              </div>
            </template>
            
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn color="purple"
              :disabled="!FormValid"
                text
                @click="saveAppointment"
              >Save</v-btn>
            </v-card-actions>
          </v-card>

        </template>

      </v-dialog>
    </v-col>

      <v-calendar
        @click="addEvent"
        :events="events"
        type="week"
        event-color="purple"
        value="2022-07-26"
        now="2022-07-26"
      >
      </v-calendar>

    </div>
  </v-app>
</template>

<script>
import axios from 'axios';
import { type } from 'os';
import Nav from '../components/Nav.vue'
export default {
    name: "App",
    data: () => {
        return {
            events: [
                {
                    name: "Event 1",
                    start: "2022-07-26T02:00:00",
                    end: "2022-07-26T04:00:00",
                    timed: true,
                },
                {
                    name: "Event 2",
                    start: "2022-07-24T08:00:00",
                    end: "2022-07-24T12:00:00",
                    timed: true,
                },
                {
                    name: "Event 3",
                    start: "2022-07-28T04:00:00",
                    end: "2022-07-28T08:00:00",
                    timed: true,
                },
            ],
            dialog:false,
            date: null,
            time:null,
            endtime:'',
            menu:false,
            menu2: false,
            doctors:[]
            ,doctor:null,
            name:'',
            services:[],
            service:null,
            userInfo: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "",
            formIsValid:false,
            
        };
    },
    methods:{
      async getdoctors(){
        await axios.get('http://localhost:5500/user/doctors')
        .then((res)=>{
            console.log(res.data)
            console.log(this.userInfo)
            this.doctors=res.data

        })
      },
      async getservices(){
              
              this.services=[]
            await axios.get(`http://localhost:5500/service/doctor/${this.doctor}`)
                    .then((res)=>{
                        this.services=res.data
                    })
                    .catch((error)=>{
                        console.log(error.message)
                    })
            },
            addEvent(){
              dialog = true
            },

      async saveAppointment(){
            await axios.post(`http://localhost:5500/book/find`,{
                 from:this.time, to:this.endtime, date:this.date , patient_id:this.userInfo.id , doctor_id:this.doctor 
              })
                    .then((res)=>{
                      
                        console.log(res.data , 'appoitnment exist')
                         alert("there is an appointment on this time")

                    })
                    .catch((error)=>{
                        console.log(error.message);
                        this.dialog = false
                    })

            
            // if(this.FormValid){
            // let to = this.time.slice(0,2)
            //   let complement =this.time.slice(2,5)
            //   to = parseInt(to) +1
            //   to=to.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) +complement
            //   console.log(to)
            //   this.endtime=to ;
            //   await axios.post(`http://localhost:5500/book`,{
            //     name:this.name, from:this.time, to:this.endtime, date:this.date , patient_id:this.userInfo.id , doctor_id:this.doctor , service_id:this.service
            //   })
            //         .then((res)=>{
                        
            //         })
            //         .catch((error)=>{
            //             console.log(error.message)
            //         })
            //         }
            },
    },
    mounted(){
      this.getdoctors()
      
    },
    watch:{
      doctor(){
      this.getservices()
      },
 
    },
    computed:{
      nameIsValid(){
        return  typeof this.name === 'string' && this.name.length > 3
      },
      TimeIsValid(){
        return typeof this.time === 'string' && this.time != null
      },
      DateIsValid(){
        return typeof this.date === 'string' && this.date != null
      },
      DoctorIsValid(){
        return typeof this.doctor === 'string' && this.doctor != null
      },
      ServiceIsValid(){
        return typeof this.service === 'string' && this.service != null
      },
      FormValid(){
          return  this.TimeIsValid && this.nameIsValid && this.DateIsValid 
          
      }
    },
    components: { Nav }
};
</script>
<style scoped>
.selection{
  border:1px solid rgb(173, 173, 173);
  border-radius: 4px;
}
.errorMessage{
    color: rgb(235, 60, 60);
    font-weight: smaller;
    min-height: .2rem;
    max-width: 50%;
    margin-left: 30px;
}
.doctor{
  display:flex;
}
</style>