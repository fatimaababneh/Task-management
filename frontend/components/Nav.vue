<template>
<div>
    <div class="container-nav">
    <h2 v-if="title">Hi {{title}} </h2>
    <h2 v-if="!title">Hello </h2>
    <!-- <ul class="navbar-elements">
        <li @click="gotohome">Home</li>
        <li @click="down" class="category">Categories <v-icon
          black
          left
        >
          mdi-arrow-down
        </v-icon></li> -->

                    <div class="navbar">
                    <a @click="gotohome">Home</a>
                    <a @click="gottoprofile">profile</a>
                    <span v-if="calender === '1'"><a @click="gottocalender">Book</a></span>
                    <div class="dropdown">
                        <button @click="down" class="dropbtn">Categories 
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                        <a href="#">Doctors</a>
                        <a href="#">Services</a>
                        <a href="#">Field</a>
                        </div>
                    </div> 
                    </div>

        <!-- <li @click="gottoprofile">profile</li>
        <li @click="gottocalender">Book</li>
        <li>About</li>
    </ul> -->
        <p id="signup-btn" @click="signup">Logout</p>
    </div>
    <!-- <span class="dropdown" v-if="drop">
            <p>Doctors</p>
            <p>Services</p>
            <p>Appointments</p>
        </span> -->
        
    </div>
</template>

<script>
    export default {
        name:'Nav',
        data(){
            return{
                drop:false,

            }
        },props:{
                    title:String,
                    calender:String
                },
    methods:{
        gotohome(){
            this.$router.push({ path: '/' })
        },
        down(){
            this.drop=!this.drop;
        },
        gottoprofile(){
            this.$router.push({ path: '/profile' ,  query: this.calender})
        },
        gottocalender(){
            this.$router.push({ path: '/calender' })
        },
        signup(){
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.$router.push({ path: '/login' })
        }
    }
    }
</script>

<style lang="scss" scoped>
.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #b978c5;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
#signup-btn{
    color: rgb(20, 59, 99);
    margin:0 auto ;
    font-size: larger;
    font-weight: bold;
     cursor: pointer;
}
#signup-btn :hover{
    font-weight: bolder;
}
.dropdown{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    background-color: whitesmoke;
    border-radius: 4px;
    border: 1px solid grey;
    color: black;
    max-width: max-content;
    // position:relative;
    margin: auto 19em;
    padding: 2px 4px;
    overflow: hidden;
    float: left;
}
.container-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(223, 228, 233);
    height: 4em;
     background-color: #333;
}
.container-nav h2{
    margin: auto ;
    text-transform: capitalize;
   
}
.navbar-elements{
    color: rgb(20, 59, 99);
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    font-size: larger;
    font-weight: bold;
}
.navbar-elements li{
    list-style-type: none;
    cursor: pointer;
}
</style>