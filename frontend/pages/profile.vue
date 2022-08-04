<template>
    <div>
        <Nav :calender=$route.query[0] :title="title"/>
        <body>
        <form class="form-info">
        <div class="container rounded bg-white mt-5">
        <div class="row">
            <div class="col-md-4 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-3">
                    <img class="rounded-circle mt-5 im" :src="user.image" width="100">
                <span class="font-weight-bold">{{user.first_name}} {{user.last_name}}</span>
                <span class="text-black-50">{{user.email}}</span><span>patient</span></div>
            </div>
            <div class="col-md-8">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3 first-slice">
                        <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
                            <h6><v-icon
          black
          left
        >
          mdi-arrow-left

        </v-icon>Back to home</h6>
                        </div>
                        <h6 class="text-right">Edit Profile</h6>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" v-model="user.first_name"><p class="errorMessage"></p></div>
                        
                        <div class="col-md-6"><input type="text" class="form-control" v-model="user.last_name" placeholder="Last name"><p class="errorMessage"></p></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="Email" v-model="user.email" disabled></div>
                        <div class="col-md-6"><input type="text" class="form-control" v-model="user.phone" placeholder="Phone number"><p class="errorMessage"></p></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="nationality" v-model="user.nationality"></div>
                        <div class="col-md-6"><input type="text" class="form-control" v-model="user.nationality_number" placeholder="Nationality Number"><p class="errorMessage"></p></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input type="text" class="form-control" placeholder="image url" v-model="user.image"><p class="errorMessage"></p></div>
                        <div class="col-md-6"><input type="text" class="form-control" v-model="user.age" placeholder="Age"></div>
                    </div>
                    <div class="mt-5 text-right"><button @click="SaveUserInfo" class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </div>
            </div>
        </div>
        </div>
    </form>
    </body>
    </div>
</template>

<script>
import axios from 'axios';
import Nav from '~/components/Nav.vue'
    export default {
    data() {
        return {
            userInfo: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ""
            ,id: localStorage.getItem("user") ? (JSON.parse(localStorage.getItem("user"))).id : "",
            user:{
                first_name:'',last_name:'',email:'',nationality:'',nationality_number:'',phone:'',image:'',age:''
            },
            imageValid:''
        };
    },
    methods: {
        async getUserInfo(){ 
            await axios.get(`http://localhost:5500/user/get/${this.id}`)
            .then((res)=>{
                console.log(res.data)
                this.user=res.data
            })
            .catch((error)=>{
            })
        },
        async SaveUserInfo(){
            
            await axios.put(`http://localhost:5500/user/edit/${this.id}` , {first_name:this.user.first_name,last_name:this.user.last_name,email:this.user.email,nationality:this.user.nationality,nationality_number:this.user.nationality_number,phone:this.user.phone,image:this.user.image,age:this.user.age})
            .then((res)=>{
                console.log(res.data)
                this.getUserInfo();
            })
            .catch((error)=>{
            })
        }
    },
    mounted() {
        this.getUserInfo();
        
    },
    props:{
                    title:String
                },
    components: { Nav }
}
</script>

<style lang="scss" scoped>
body {
  background: #b978c5;
  height: 92%;
  padding: 40px 20px;
}
.first-slice{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: large;
}
.errorMessage{
    color: rgb(235, 60, 60);
    font-weight: smaller;
    min-height: 1.45rem;
    max-width: 20%;
}
.im{
    margin: auto;
}
.form-info{
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    background-color: whitesmoke;
    width: 80%;
    height: 90%;
    border-radius: 4px;
}
.form-control:focus {
  box-shadow: none;
  border-color: #BA68C8;
}
.form-control{
    border-radius: 4px;
    border: 1.7px solid rgb(204, 202, 202);
    padding: 7px;
    width: 100%;
}
.profile-button {
  background: #BA68C8;
  box-shadow: none;
  border-radius:4px ;
    padding: 5px;
    color: white;
}

.profile-button:hover {
  background: #682773;

}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}
</style>