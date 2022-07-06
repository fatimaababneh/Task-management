<template>
    <div>
            <Navbar/>
            
             <v-row cols="12" sm="4" no-gutters> 
                <div v-for="product in products" >
                <v-col >
                        <Card :product="product" class="pa-6"
                        outlined
                        />
                </v-col>
                </div>
             </v-row>
             
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import Navbar from '../components/Navbar.vue'
    export default {
        data(){
            return{
                products:[{
                    name:"orange", price:23, description:"nothjkfoeothjkfoefeckjfeffeckjfef",image:"https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                    name:"lemon", price:78, description:"nothjkfoeothjkfoefeckjfeffeckjfef",image:"https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                    name:"stawberry", price:50, description:"nothjkothjkfoefeckjfeffoefeckjfef", image:"https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                    name:"orange", price:23, description:"nothjkfoefothjkfoefeckjfefeckjfef",image:"https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                    name:"lemon", price:23, description:"nothjkfoefeothjkfoefeckjfefckjfef",image:"https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                    name:"stawberry", price:23, description:"nothjkfoefeckjfefothjkfoefeckjfef", image:"https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                ]
            }
        },
        comments: { Card , Navbar }
    }
</script>

<style lang="scss" scoped>

</style>