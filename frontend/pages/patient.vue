<template>
    <div>
        <Nav calender='1' :title="title"/>
    </div>
</template>

<script>
import Nav from '~/components/Nav.vue';
    export default {
        name:'Patient',
        data(){
        return{

        }
        },props:{
                    title:String
                },
    components: { Nav }
}
</script>

<style lang="scss" scoped>

</style>