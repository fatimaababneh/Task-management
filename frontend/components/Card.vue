<template>
    <div>
        <template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="product.image"
      height="200px"
    ></v-img>
    <v-card-title>
      {{product.name}}
    </v-card-title>

    <v-card-subtitle>
      {{product.description}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Add ro cart
      </v-btn>
    {{product.price}}$
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
     
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
            {{product.description}}
         </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
    </div>
</template>

<script>

    export default {
        name: 'Card',
         data() {
            return{
                
                show: false,
            }
        },
        props:{
                    product:Object
                },
         methods:{
         }
        
    }
</script>

<style lang="scss" scoped>

</style>