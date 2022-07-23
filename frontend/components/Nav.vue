<template>
    <div class="container-nav">
    Nav 
    <ul class="navbar-elements">
        <li>Home</li>
        <li @click="gottoshop">Shop</li>
        <li @click="gottocalender">Book</li>
        <li>About</li>
        <li>More</li>
    </ul>
    </div>
</template>

<script>
    export default {
        name:'Nav',
        data(){
            return{

            }
        },
    methods:{
        gottoshop(){
            this.$router.push({ path: '/shop' })
        },
        gottocalender(){
            this.$router.push({ path: '/calender' })
        }
    }
    }
</script>

<style lang="scss" scoped>
.container-nav{
background-color: black;
align-items: center;
}
.navbar-elements{
    color: wheat;
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    font-size: larger;
    
}
.navbar-elements li{
    list-style-type: none;
    cursor: pointer;
}
</style>