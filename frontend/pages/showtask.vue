<template>
    <div>
        <template>
    <div>
        <template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
    </div>
</template>
    </div>
</template>

<script>
    export default {
  
        data(){
            return{
                headers:['items','fruits']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>