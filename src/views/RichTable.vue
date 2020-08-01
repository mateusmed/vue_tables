<template>
    <div>
        <headermenu v-bind:showSearch="false"/>
        <richtable/>
    </div>
</template>

<script>

    import HeaderMenu from "../components/HeaderMenu";
    import RichTable from "../components/tables/RichTable";

    export default {
        name: "RichTable",
        components:{
           'headermenu': HeaderMenu,
           'richtable': RichTable
        }
    }
</script>

<style scoped>

</style>