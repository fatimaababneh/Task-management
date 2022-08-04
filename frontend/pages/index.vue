<template>
<div>

<div v-if="getrole === 0">
<!-- hi patient -->
<Patient :title="username"/>
</div>

<div v-if="getrole === 2">
<!-- hi patient -->
<Patient :title="username"/>
</div>
<div v-if="getrole === 3">
<!-- hi doctor -->
<Doctor/>
</div>
<div v-if="getrole === ''" >

hi guest
</div>

</div>
</template>

<script>
import Patient from './patient.vue'
import Doctor from '~/components/Doctor.vue';
export default {
    name: "IndexPage",
    data() {
        return {
            getrole: "",
            username:''
        };
    },
    methods: {},
    mounted() {
        this.getrole = localStorage.getItem("user") ? (JSON.parse(localStorage.getItem("user"))).role : "";
        this.username = localStorage.getItem("user") ? (JSON.parse(localStorage.getItem("user"))).first_name : "";
        console.log(this.getrole, "here role");
        if (this.getrole == "") {
            this.$router.push({ path: "/login" });
        }
    },
    components: { Patient, Doctor }
}
</script>
