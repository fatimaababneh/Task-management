<template>
    <div>
        <template>
  <v-row>
    <v-col
      cols="11"
      sm="10"
    >
      <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="20"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="600px"
        min-width="400px"

      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Picke time"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
            color="green"
          ></v-text-field>
            </template>
            <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            @click:minute="$refs.menu.save(time)"
            color="green"
            ></v-time-picker>
            
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
    <v-col
      cols="12"
      sm="12"
    >
     
    </v-col>
  </v-row>
</template>
    </div>
</template>

<script>
    export default {
        name:"Time",
        data(){
            return{
                menu2: false,
                modal2: false
            }
        },
        props:{
            time: String,
        },
        methods:{
            
        },
        watch:{
           time(){
             if(this.time != null){
                console.log(this.time)
                this.$emit('time', this.time);
             }
           } 
        }
    }
</script>

<style lang="scss" scoped>

</style>