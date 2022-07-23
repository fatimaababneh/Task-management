<template>
    <div v-if="$route.query">
    <Nav/>
            here product page
            <!-- {{this.$route.query}} -->
            <h1><span>Shop >> 

            </span>
            {{$route.query.Category.name}}
            </h1>
            <div class="container_page">
                <v-col cols="7">
            <img class="image-product" :src="$route.query.image"/>
                </v-col>
                <v-col class="image-description" cols="6">
                    <div>
                    <h2>{{$route.query.name}}</h2>
                    <br/>
                    <h5><h2>Product Description:</h2> {{$route.query.description}}</h5>
                    <br/>
                    </div>
                    <div>
                    <h1>Price: {{$route.query.price}}$</h1>
                    <button id="add-cart">Add to Cart</button>
                    </div>
                </v-col>
            </div>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
    export default {
    components: { Nav },
    mounted(){
        // console.log(this.$route.query)
    }
}
</script>

<style lang="scss" scoped>
.container_page{
    border: 1px solid rgb(216, 215, 215);
    width: 95%;
    display: flex;
    margin: auto;
}
.image-product{
    width:800px;
    height: 550px;
}
#add-cart{
    border-radius: 30px;
    background-color: rgb(243, 226, 77);
    color: rgb(4, 7, 7);
    padding: 8px;
    font-size: large;
}
.image-description{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>