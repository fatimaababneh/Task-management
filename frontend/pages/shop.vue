<template>
    <div>
        <Nav/>
        <container>
        <v-row>
        <v-col cols="1" sm="2" class="pa-6">
            <h4 id="filter_title">Filters</h4>
            <hr/>
        <div v-for="item in categories" class="pa-2 ">
        <p class="types" :item-text="item.name"  item @click="getProductsOfCategory(item.id)">{{item.name}}</p>
        </div>
        
        </v-col>
        <v-col cols="10">
        <v-row cols="12" sm="4" no-gutters>
            <div v-if="products" v-for="product in products">
                <v-col @click="SinglePageProduct(product)" class="card">
                    <Card :product="product" class="pa-3" outlined />
                </v-col>
            </div>
        <div v-else class="pa-2 ">
        <p >{{emptyCat}}</p>
        </div>
        </v-row>
        </v-col>
        </v-row>
        </container>
        </div>
</template>

<script>
import Card from '../components/Card.vue'
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
import Vue from 'vue'

export default {
    name:"shop",
    data() {
        return {     
            products: [
            // {
            //     name: "orange", price: 23, description: "nothjkfoeothjkfoefeckjfeffeckjfef", image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // },
            // {
            //     name: "lemon", price: 78, description: "nothjkfoeothjkfoefeckjfeffeckjfef", image: "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // },
            // {
            //     name: "stawberry", price: 50, description: "nothjkothjkfoefeckjfeffoefeckjfef", image: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // },
            // {
            //     name: "orange", price: 23, description: "nothjkfoefothjkfoefeckjfefeckjfef", image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // },
            // {
            //     name: "lemon", price: 23, description: "nothjkfoefeothjkfoefeckjfefckjfef", image: "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // },
            // {
            //     name: "stawberry", price: 23, description: "nothjkfoefeckjfefothjkfoefeckjfef", image: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // }
            ],
            categories:'',
            emptyCat:''
        }
    },
    comments: { Card, Navbar },
    methods: {
        async AllData() {
            await axios.get(`http://localhost:5555/category`)
                .then((res) => {
                    console.log(res.data , 'cat');
                    this.categories=res.data
                    this.categories=[...this.categories, {name:'All' ,id:"allcategories"}]
                })
                .catch((error) => {
                    console.log(error);
                });

                await axios.get(`http://localhost:5555/product`)
                .then((res) => {
                    console.log(res.data, 'products');
                    this.products=res.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getCategoryProducts(){
            await axios.get(`http://localhost:5555/category`)
                .then((res) => {
                    this.categories=res.data
                })
                .catch((error) => {
                    console.log(error);
                });
      },
      async getProductsOfCategory(category_id){
        if(category_id == 'allcategories'){
            this.AllData();
        }
        else{
            this.products=[];
        await axios.get(`http://localhost:5555/product/of/category/${category_id}`)
                .then((res) => {
                    console.log(res.data , "by category");
                    if(res.data == []){
                            this.emptyCat="this category is empty"
                    }
                    this.products=res.data
                })
                .catch((error) => {
                    console.log(error);
                });
            }},
      async SinglePageProduct(product){
          await  this.$router.push({ path: '/product', query: product })
            // console.log(product)
      }},
      mounted(){
        this.AllData();
      }
    }
</script>

<style lang="scss" scoped>
#filter_title{
    margin-left: 2em;
}
.types{
    // border: 1px solid grey;
    padding: 10px;
    font-style: bold;
}
.card {
    cursor: pointer;
}
.types:hover{
    background-color: rgb(199, 236, 199);
}
</style>