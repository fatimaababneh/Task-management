<template>
    <div>
        <!-- <v-alert v-if="flag"
      border="top"
      color="red lighten-2"
      dark
    >
      you did create new account
    </v-alert> -->
<form class="form-login">
    <p id="login-title">SignUp</p>
    <div class="name">
    <!-- first name input -->
  <input v-model="fname" type="text" v-validate="'required|min:5'" placeholder="First name" />
    <!-- last name input -->
  <input v-model="lastname" type="text" v-validate="'required|min:5'" placeholder="Last name" />
    </div>

  <!-- Email input -->
  <input v-model="email" id="email" type="email" v-validate="'required|min:5'" placeholder="Email" />
    
  <!-- Password input -->
 <input v-model="password1" id="password" type="password" v-validate="'required|min:6'" placeholder="Password" />

  <!-- Password input -->
 <input v-model="password2" type="password"  id="password" v-validate="'required|min:6'" placeholder="ensure Password" />

    <div class="age-phone">
    <!-- first name input -->
  <input v-model="age" type="text" placeholder="Age" />
    <!-- last name input -->
  <input v-model="phone" type="text" placeholder="Phone" />
    </div>

  <!-- 2 column grid layout for inline styling -->
        <div class="selection2">
        <v-col
        cols="10"
        sm="4"
        class="selection"
      >
        <v-select
          :items="items" 
          label="Your role"
          v-model="role"
        ></v-select>
      </v-col>
      <v-col
        cols="10"
        sm="4"
        class="selection"
      >
        <v-select
          :items="nationalities" 
          label="nationality"
          v-model="national"
        ></v-select>
      </v-col>
      </div>
        
    
  
  <!-- Submit button -->
  <button @click="insertdata" type="button" class="signin-btn">Sign Up</button>
    <br/>
  <!-- Register buttons -->
  <div class="text-center">
    <p>Have an account? <a href="login">LogIn</a></p>
    
  </div>
</form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                items:['doctor','patient'],
                nationalities:['Jordanain' , 'American' , 'Palastenian' ],
                fname:null,
                lastname:'',
                email:'',
                password1:'',
                password2:'',
                age:'',
                phone:'',
                role:'',
                national:'',
                flag:false
            }
        },methods:{
            async insertdata(){
                let emailFormat=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                if(this.role === 'patient'){
                    this.role = 2
                }
                if(this.role === 'doctor'){
                    this.role = 3
                }
                if(this.email.match(emailFormat) && this.password2.length>5 && this.password1 === this.password2){
                await axios.post("http://localhost:5500/user",{
                    email: this.email, password:this.password2, first_name:this.fname, mid_name: '', last_name:this.lastname , image:'' , nationality:this.national , nationality_number:'' , phone:this.phone , age:this.age , role:this.role
                })
                .then((res) => {
                    console.log(res.data)
                    // this.flag=true
                    alert("you did create new account")
                    this.$router.push({ path: '/login' })
                })
                .catch((error) => {
                    console.log(error);
                });}
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>
#login-title{
    margin: auto;
    font-weight: bold;
    font-size: larger;
    color: rgb(65, 109, 241);
}
.form-login{
    display: flex;
    flex-direction: column;
    gap:.8em;
    margin: 30px auto;
    border: 1.2px solid rgb(201, 201, 233);
    border-radius: 6px;
    width:30%;
    height: 85%;
    padding: 20px;
}
.selection{
margin: auto;
}
.selection2{
display: flex;
// flex-direction: row;
width:90%;
margin: auto;
}
.age-phone{
    display: flex;
    width: 70%;
    margin: auto;
    gap:.2em;
}
.age-phone input{
    border: 1.7px solid rgb(201, 201, 233);
    border-radius: 4px;
    width: 50%;
}
.name{
    display: flex;
    width: 70%;
    margin: auto;
    gap:.2em;
}
.name input{
border: 1.7px solid rgb(201, 201, 233);
border-radius: 4px;
width: 50%;
}
#password{
    margin: auto;
    width: 70%;
    border: 1.7px solid rgb(201, 201, 233);
    border-radius: 4px;
}
#email{
    margin: auto;
    width: 70%;
    border: 1.7px solid rgb(201, 201, 233);
    border-radius: 4px;
}
#email:focus{
     border: 1.7px solid rgb(55, 98, 239);
}
.forget {
    margin: 13px auto;
}
.signin-btn{
    background-color: rgb(55, 98, 239);
    color: white;
    border-radius: 4px;
    width: 70%;
    margin: auto;
}
.signin-btn:hover{
    background-color: rgb(93, 93, 221);
}
</style>