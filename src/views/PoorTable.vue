<template>
    <div>
<!--  v-bind é usado quando se passa atributos para outros sub-component-->
        <headermenu v-bind:showSearch="true"/>
        <poortable/>
    </div>
</template>

<script>
    import HeaderMenu from "../components/HeaderMenu";
    import PoorTable from "../components/tables/PoorTable";

    export default {
        name: "Index",
        components: {
            'headermenu': HeaderMenu,
            'poortable':PoorTable
        }
    }
</script>

<style scoped>

</style>