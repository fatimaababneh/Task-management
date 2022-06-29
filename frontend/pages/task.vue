<template>

  <div style="padding: 1em">

    <template>

      <div class="text-center">
        <template>
          <v-card>
            <v-card-title>
              Task data
              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
              </v-text-field>

            </v-card-title>
            <v-data-table :headers="headers" :items="tasks" :search="search">
            <!--  -->
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
                      <v-checkbox v-model="claimed">
                        <template v-slot:label>
                          Claimed
                        </template>
                      </v-checkbox>
                      <label>Asignee Name</label>
                      <v-select style="width:40vh;" v-model="assignee_name" :items="items" filled label="name..." dense>
                      </v-select>
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
                            <v-checkbox v-model="checkbox"
                              style="background:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Low
                              </template>

                            </v-checkbox>
                            <v-checkbox v-model="checkbox"
                              style="background:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Medium
                              </template>
                            </v-checkbox>
                            <v-checkbox v-model="checkbox"
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
                            <v-checkbox v-model="impact_flag"
                              style="background-color:rgb(238, 236, 236);  height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Low
                              </template>
                            </v-checkbox>
                            <v-checkbox v-model="impact_flag"
                              style="background-color:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Medium
                              </template>
                            </v-checkbox>
                            <v-checkbox v-model="impact_flag"
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

                      <v-textarea field-input class="text-1" style="width:20vh; height: inherit;" v-model="due_time"
                        filled auto-grow label="Time" rows="1" row-height="10"></v-textarea>
                      <v-textarea class="text-1" style="width:20vh;" v-model="due_date" filled auto-grow label="Date"
                        rows="1" row-height="10"></v-textarea>
                      <v-textarea class="text-1" style="width:20vh;" v-model="estmated_time" filled auto-grow
                        label="time" rows="1" row-height="10"></v-textarea>

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
            <!--  -->
              <template v-slot:item.update="{ item }" v-slot:activator="{ on, attrs }">
                <v-icon @click="updateTask(item.task_id)" v-on="on" small>
                  mdi-menu
                </v-icon>
              </template>
              <template v-slot:item.delete="{ item }">
                <v-icon small class="mr-2" @click="deleteTask(item.task_id)">
                  mdi-delete
                </v-icon>
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
                      <v-checkbox v-model="claimed">
                        <template v-slot:label>
                          Claimed
                        </template>
                      </v-checkbox>
                      <label>Asignee Name</label>
                      <v-select style="width:40vh;" v-model="assignee_name" :items="items" filled label="name..." dense>
                      </v-select>
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
                            <v-checkbox v-model="checkbox"
                              style="background:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Low
                              </template>

                            </v-checkbox>
                            <v-checkbox v-model="checkbox"
                              style="background:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Medium
                              </template>
                            </v-checkbox>
                            <v-checkbox v-model="checkbox"
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
                            <v-checkbox v-model="impact_flag"
                              style="background-color:rgb(238, 236, 236);  height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Low
                              </template>
                            </v-checkbox>
                            <v-checkbox v-model="impact_flag"
                              style="background-color:rgb(238, 236, 236); height:30px; color:black; border-radius:4px;">
                              <template v-slot:label>
                                Medium
                              </template>
                            </v-checkbox>
                            <v-checkbox v-model="impact_flag"
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

                      <v-textarea field-input class="text-1" style="width:20vh; height: inherit;" v-model="due_time"
                        filled auto-grow label="Time" rows="1" row-height="10"></v-textarea>
                      <v-textarea class="text-1" style="width:20vh;" v-model="due_date" filled auto-grow label="Date"
                        rows="1" row-height="10"></v-textarea>
                      <v-textarea class="text-1" style="width:20vh;" v-model="estmated_time" filled auto-grow
                        label="time" rows="1" row-height="10"></v-textarea>

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
      </div>
    </template>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Task Subject',
          align: 'start',
          sortable: false,
          value: 'subject',
        },
        { text: 'Task Description', value: 'description' },
        { text: 'Task Type', value: 'type' },
        { text: 'Claimed', value: 'claimed' },
        { text: 'Assignee Name', value: 'assignee_name' },
        { text: 'Impact importance', value: 'impact' },
        { text: 'Impact', value: 'severity' },
        { text: 'severity importance', value: 'impact_text' },
        { text: 'severity', value: 'severity_text' },
        { text: 'Due Time', value: 'due_time' },
        { text: 'Due date', value: 'due_date' },
        { text: 'estimated time', value: 'estmated_time' },
        { text: 'delete', value: 'delete' },
        { text: 'update', value: 'update' }
      ],
      tasks: [{
        subject: '',
        description: '',
        type: '',
        claimed: '',
        assignee_name: '',
        impact: '',
        severity: '',
        impact_text: '',
        severity_text: '',
        due_time: '',
        due_date: '',
        estmated_time: '',
        delete: '',
        updata: ''
      }],
      alltasks: '',
      dialog: false,
      subject: '',
      description: '',
      type: '',
      claimed: '',
      assignee_name: '',
      impact: '',
      impact_flag: false,
      severity: '',
      impact_text: '',
      severity_text: '',
      due_time: '',
      due_date: '',
      estmated_time: '',
      checkbox: null,
      items: []
    }
  },
  methods: {
    async addData(e) {
      this.dialog = false;
      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:30000/task', {
          subject: this.subject,
          description: this.description,
          type: this.type,
          claimed: this.claimed,
          assignee_name: this.assignee_name,
          impact: this.impact,
          severity: this.severity,
          impact_text: this.impact_text,
          severity_text: this.severity_text,
          due_time: this.due_time,
          due_date: this.due_date,
          estmated_time: this.estmated_time
        })
        console.log('assign')
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTask(id) {
      this.dialog = false
      await axios.put(`http://localhost:30000/task/${id}`)
        .then((res) => {
          this.tasks = this.tasks.filter((ele) => {
            return ele.task_id !== id
          })
        })
        .catch((error) => {
          console.log(error);
        })
    },
    async updateTask(id , body) {
      this.dialog = false
      await axios.put(`http://localhost:30000/task/edit/${id}`,{
          subject: this.subject,
          description: this.description,
          type: this.type,
          claimed: this.claimed,
          assignee_name: this.assignee_name,
          impact: this.impact,
          severity: this.severity,
          impact_text: this.impact_text,
          severity_text: this.severity_text,
          due_time: this.due_time,
          due_date: this.due_date,
          estmated_time: this.estmated_time

      })
        .then((res) => {
          this.tasks = this.tasks.filter((ele) => {
            return ele
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
  async mounted() {
    await axios
      .get('http://localhost:30000/task')
      .then((res) => {
        this.alltasks = res.data
        this.tasks = this.alltasks
        console.log(this.alltasks)
        // this.alltasks.forEach((element) => {
        // if (element.subject == null &&
        //   element.description == nul &&
        //   element.type == null &&
        //   element.claimed == null &&
        //   element.assignee_name == null &&
        //   element.impact == null &&
        //   element.severity == null &&
        //   element.impact_text == null &&
        //   element.severity_text == null &&
        //   element.due_time == null &&
        //   element.due_date == null &&
        //   element.estmated_time == null) { }

        // })
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('created');

  }

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
  width: 110vh;
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
