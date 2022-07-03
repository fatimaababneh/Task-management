<template>
    <div>
        <template>

            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="700px" height="850px">
                    <!-- {{ data_form }} -->
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">User Profile</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="subject" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="description" v-model="description"
                                            hint="example of helper text only on focus"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Task type*" v-model="type"
                                            hint="example of persistent helper text" persistent-hint required>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="claimed" v-model="claimed" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="assignee name" v-model="assignee_name"
                                            hint="example of helper text only on focus"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Impact*" v-model="impact_text"
                                            hint="example of persistent helper text" persistent-hint required>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="severity*" v-model="severity_text" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Due time" v-model="due_time"
                                            hint="example of helper text only on focus"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="due date*" v-model="due_date"
                                            hint="example of persistent helper text" persistent-hint required>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="estimated time*" v-model="estmated_date"
                                            hint="example of persistent helper text" persistent-hint required>
                                        </v-text-field>
                                    </v-col>
                                    <!-- <v-col cols="12">
                                    </v-col> -->
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="$emit('close')" >
                                Close
                            </v-btn>
                            <v-btn color="green darken-1" text @click="updateTask()">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </template>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        dialog: Boolean,
        data_form: Object
    },
    data() {
        return {
            subject: this.data_form.subject,
            description: this.data_form.description,
            type: this.data_form.type,
            claimed: this.data_form.claimed,
            assignee_name: this.data_form.assignee_name,
            impact: "high",
            severity: "high",
            impact_text: this.data_form.impact_text,
            severity_text: this.data_form.severity_text,
            due_time: this.data_form.due_time,
            due_date: this.data_form.due_date,
            estmated_time: this.data_form.estmated_time,
            toggle: false,
            data_updated:''
        }
    },

    methods: {
        async updateTask() {
            this.dialog = false
            await axios.put(`http://localhost:30000/task/edit/${this.data_form.task_id}`,{
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
                        this.$emit('update');
                        this.$emit('close');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        info() {
            console.log(this.data_form, "edit")
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
</style>