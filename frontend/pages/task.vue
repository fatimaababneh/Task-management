<template>

  <div style="padding: 1em">

    <template>

      <div class="text-center">

        <template>
          <v-card v-if="tasks.length">
            <v-card-title>
              Task data
              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
              </v-text-field>

            </v-card-title>
            <v-data-table :headers="headers" :items="tasks" :search="search">

              <template v-slot:item.update="{ item }" v-slot:activator="{ on, attrs }">
                <v-icon @click="updateTask(item)" small>
                  mdi-menu
                </v-icon>

              </template>
              <template v-slot:item.delete="{ item }">
                <v-icon small class="mr-2" @click="deleteTask(item.task_id)">
                  mdi-delete
                </v-icon>
              </template>
              <template v-slot:item.assignee_name="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <span v-bind="attrs" v-on="on"> user name</span>
                  </template>
                  <span> {{ showAssig(item.assignee_name) }} </span>
                </v-tooltip>
              </template>
            </v-data-table>
          </v-card>
        </template>
        <v-dialog v-model="dialog" width="1500">

          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-text style="width: 120vh; padding:.5em;">
              <h2 id="title">Task Management</h2>

              <div class="container-form">

                <div class="frst-colm">
                  <div>
                    <div class="frst-row-col1">
                      <label>Task Subject</label>
                      <v-textarea class="text-1" v-model="subject" filled auto-grow label="Enter title" rows="1"
                        row-height="5" style="width:200px"></v-textarea>
                      <label>Task Description</label>
                      <v-textarea class="text-1" v-model="description" filled auto-grow label="Enter description"
                        rows="2" row-height="20" style="width:300px"></v-textarea>

                    </div>
                    <div class="scnd-row-col1">
                      <label>Task Type</label>
                      <v-textarea class="text-1" v-model="type" filled auto-grow label="Task Type..." rows="2"
                        row-height="10" style="width:200px"></v-textarea>
                      <v-checkbox v-model="claimed" item-value="true">
                        <template v-slot:label>
                          Claimed
                        </template>
                      </v-checkbox>
                      <label>Asignee Name</label>
                      <v-col cols="8">
                        <v-autocomplete v-model="assignee_name" :items="assignee" item-text="user_name" return-object
                          dense chips small-chips label="Asignee name" multiple solo></v-autocomplete>
                      </v-col>
                    </div>
                  </div>
                </div>
                <div class="scnd-colm">
                  <div>
                    <div class="frst-row-col2" style="width:600px; height:300px; padding-left:.3em;">
                      <span style="font-size:large;">Priority:</span>
                      <v-col style="width:600px; padding-left:2em;">
                        <v-col style="height:120px">
                          <label>Impact:</label>
                          <v-row justify="space-around" style="height:65px" v-model="impact">
                            <v-checkbox v-model="impact" item-value="1"
                              style="background:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Low
                              </template>
                            </v-checkbox>
                            <v-checkbox item-value="2"
                              style="background:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Medium
                              </template>
                            </v-checkbox>
                            <v-checkbox item-value="3"
                              style="background-color:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                High
                              </template>
                            </v-checkbox>
                          </v-row>

                          <v-textarea class="text-1" v-model="impact_text" filled auto-grow label="Two rows" rows="1"
                            row-height="10"></v-textarea>
                        </v-col>
                        <v-col style="height:120px">
                          <label>Severity:</label>
                          <v-row justify="space-around" style="height:65px" v-model="severity">
                            <v-checkbox
                              style="background-color:rgb(238, 236, 236);  height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Low
                              </template>
                            </v-checkbox>
                            <v-checkbox
                              style="background-color:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Medium
                              </template>
                            </v-checkbox>
                            <v-checkbox
                              style="background-color:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                High
                              </template>
                            </v-checkbox>
                          </v-row>
                          <v-textarea class="text-1" v-model="severity_text" filled label="Two rows" rows="1"
                            row-height="5"></v-textarea>
                        </v-col>
                      </v-col>
                    </div>
                    <div class="scnd-row-col2">

                      <Time :time="due_time" @time="onTimeBicker" />
                      <Date :date="due_date" @date="onDateBicker" />

                    </div>
                  </div>
                </div>

              </div>
            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn @click="addData" color="green" text>
                Create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- edit dialog -->
        <div v-if="dialog2">
          <Edit :dialog="dialog2" :data_form="edit_form" @close="dialog2 = false" @update="showdata" />
        </div>
        <!-- end of edit -->
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import Edit from '~/components/Edit.vue';
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Task Subject",
          align: "start",
          sortable: false,
          value: "subject",
        },
        { text: "Task Description", value: "description" },
        { text: "Task Type", value: "type" },
        { text: "Claimed", value: "claimed" },
        { text: "Assignee Name", value: "assignee_name" },
        { text: "Impact importance", value: "impact" },
        { text: "Impact", value: "severity" },
        { text: "severity importance", value: "impact_text" },
        { text: "severity", value: "severity_text" },
        { text: "Due Time", value: "due_time" },
        { text: "Due date", value: "due_date" },
        { text: "estimated time", value: "estmated_time" },
        { text: "delete", value: "delete" },
        { text: "update", value: "update" }
      ],
      tasks: [{
        subject: "",
        description: "",
        type: "",
        claimed: "",
        assignee_name: "",
        impact: "",
        severity: "",
        impact_text: "",
        severity_text: "",
        due_time: "",
        due_date: "",
        estmated_time: "",
        delete: "",
        updata: ""
      }],
      alltasks: "",
      dialog: false,
      subject: "",
      description: "",
      type: "",
      claimed: false,
      impact: "",
      impact_flag: false,
      severity: "",
      impact_text: "",
      severity_text: "",
      due_time: "",
      due_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      estmated_time: "",
      checkbox: null,
      dialog2: false,
      edit_form: null,
      assignee_name: "",
      task_id: null,
      assignee: [],
      e4: null
    };
  },
  methods: {
    async addData(e) {
      this.dialog = false;
      e.preventDefault();
      await axios
        .post("http://localhost:30000/task", {
          subject: this.subject,
          description: this.description,
          type: this.type,
          claimed: this.claimed,
          impact: this.impact,
          severity: this.severity,
          impact_text: this.impact_text,
          severity_text: this.severity_text,
          due_time: this.due_time,
          due_date: this.due_date,
          estmated_time: this.estmated_time
        })
        .then((response) => {
          this.showdata();
          this.task_id = response.data.task_id
          this.insertAssignee(this.task_id)
          this.subject = "",
            this.description = "",
            this.type = "",
            this.claimed = "",
            this.impact = "",
            this.impact_flag = false,
            this.severity = "",
            this.impact_text = "",
            this.severity_text = "",
            this.due_time = "",
            this.due_date = "",
            this.estmated_time = "",
            this.assignee_name = ""

        })
        .catch((error) => {
          console.log(error);
        })
    },
    onTimeBicker(value) {
      console.log(value)
      this.due_time = value
    },
    onDateBicker(value) {
      console.log(value)
      this.due_date = value
    },
    async deleteTask(id) {
      this.dialog = false;
      await axios.put(`http://localhost:30000/task/${id}`)
        .then((res) => {
          this.tasks = this.tasks.filter((ele) => {
            return ele.task_id !== id;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateTask(item) {
      this.edit_form = item
      this.dialog2 = true
    },
    async insertAssignee(task_id) {
      try {
        const response = await axios.post(`http://localhost:30000/assignee/${task_id}`, {
          user: this.assignee_name
        })
        this.showdata();
        // this.showAssig();
        } 
        catch (error) {
      }
    },
    /////get all tasks
    async showdata() {
      await axios
        .get("http://localhost:30000/task")
        .then((res) => {
          this.alltasks = res.data;
          this.tasks = this.alltasks;
          this.showAssig()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //////get all users 
    async showUsers() {
      await axios
        .get("https://62207663ce99a7de195a41c3.mockapi.io/users/users")
        .then((res) => {
          this.assignee = res.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showAssig(arr) {
      let str = ""
      for (let i = 0; i < arr.length; i++) {
        str += `${arr[i].user_name} ,`
      }
      return str
    }
  },
  mounted() {
    this.showdata()
    this.showUsers()

  },
  watch: {
    assignee_name() {
      if (this.assignee_name.length != 0) {

      }
    }

  },
  components: { Edit }
}
</script>

<style lang="scss" scoped>
#title {
  background-color: rgb(238, 236, 236);
  border-radius: 4px;
  padding: .4em;
  width: 150vh;
  margin-top: .2em;
}

.v-text-field {
  border-radius: 10px;
  border-width: 0;
}

.frst-colm {
  display: grid;
  // grid-template-rows: 200px 400px;
}

.field-input {
  border-bottom: 0px solid grey;
  border-style: hidden;
}

.frst-row-col1 {
  height: 35vh;
}

.scnd-row-col1 {
  border-top: 2px solid rgb(125, 221, 200);
  ;
}

.scnd-row-col2 {
  padding: .3em;
  border-top: 2px solid rgb(125, 221, 200);
  // width: 110vh;
  margin-left: 1em;
  display: grid;
  grid-template-columns: 200px 200px;
}

.container-form {
  display: grid;
  grid-template-columns: 450px 600px;
  padding: .5em;
}

.scnd-colm {
  border-left: 2px solid rgb(125, 221, 200);
  ;
  margin-left: 1em;
  margin-top: 1em;
  height: 75vh;
}
</style>
