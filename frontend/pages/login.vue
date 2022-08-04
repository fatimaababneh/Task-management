<template>
  <div>
    <v-alert v-if="flag" border="top" color="red lighten-2" dark>
      you loggen in
    </v-alert>
    <form class="form-login">
      <p id="login-title">LogIn</p>
      <!-- Email input -->
      <input id="email" v-model="email" placeholder="Email" />
      <br />
      <!-- Password input -->
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Password"
      />

      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">
        <div class="forget">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <!-- Submit button -->
      <button @click="logged" type="button" class="signin-btn">Sign In</button>
      <br />
      <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member? <a href="signup">Register</a></p>
        <p>or sign up with:</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                email:'',
                password:'',
                flag:false
            }
        },methods:{
            async logged(){
                try {
                    console.log("clicked");
                  const response =  await axios.post("http://localhost:5500/user/login" , {email:this.email , password:this.password})
                  console.log(response.data);
                  if(response.data){
                    this.flag=true
                  localStorage.setItem("token", JSON.stringify(response.data.token))
                  localStorage.setItem("user", JSON.stringify(response.data.user))
                  this.$router.push({ path: '/' })
                  }
                } catch (error) {
                    console.log(error.message);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
#login-title {
  margin: auto;
  font-weight: bold;
  font-size: larger;
  color: rgb(65, 109, 241);
}
.form-login {
  display: flex;
  flex-direction: column;
  margin: 7em auto;
  border: 1.2px solid rgb(201, 201, 233);
  border-radius: 4px;
  width: 30%;
  height: 60%;
  padding: 30px;
}
#password {
  margin: auto;
  width: 60%;
  border: 1.7px solid rgb(201, 201, 233);
  border-radius: 4px;
}
#email {
  margin: auto;
  width: 60%;
  border: 1.7px solid rgb(201, 201, 233);
  border-radius: 4px;
}
.forget {
  margin: 13px auto;
}
.signin-btn {
  background-color: rgb(55, 98, 239);
  color: white;
  border-radius: 4px;
  width: 60%;
  margin: auto;
}
.signin-btn:hover {
  background-color: rgb(65, 109, 241);
}
</style>
