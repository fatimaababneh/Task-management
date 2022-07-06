<template>
    <div>
        <template>
  <v-row>
   
    <v-col
      cols="10"
      sm="8"
      md="8" 
      color="green"
    >
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
        color="green"
        backgroundcolor="green"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            color="green"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
          color="green"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
  {{date}}
</template>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            menu: false,
            modal: false,
            menu2: false,
            }
        },
        props:{
            date:String
        },
        watch:{
           date(){
             if(this.date != null){
                console.log(this.date)
                this.$emit('date', this.date);
            }

           } 
        }
    }
</script>

<style lang="scss" scoped>

</style>