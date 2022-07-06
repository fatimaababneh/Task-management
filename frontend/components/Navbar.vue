<template>
    <div>
        <template>
  <v-toolbar>
    <v-tabs
      dark
      background-color="primary"
      grow
    >
      <v-tab v-model="tabb" item-value="1">
        <v-badge
          color="pink"
          dot
        >
          <!-- <NuxtLink id="tab-1" to="/task">Tasks </NuxtLink> -->
          Shop 
        </v-badge>
      </v-tab>
      <v-tab v-model="tabb" item-value="2">
        
            <v-badge
            color="green"
            content="7"
            >
                    <v-icon
                    color="grey lighten-1"
                    large
                    >
                    mdi-account
                    </v-icon>  
            Personal Info 
            </v-badge>
      </v-tab>

      <v-tab to="/task">
        <v-badge
          color="deep-purple accent-4"
          content="5"
        >
          Tasks
        </v-badge>
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>
{{tabb}}
    </div>
</template>

<script>
    export default {
        data(){
            return{
                count:2,
                tabb:null
            }
        },
        method:{
            show(){

            }
        }
    }
</script>

<style lang="scss" scoped>
#tab-1{
    text-decoration: none;
    color:rgba(255, 255, 255, 0.6);
}
</style>