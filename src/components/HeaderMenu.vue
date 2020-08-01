<template>

    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="sr-only">Toggle navigation</span>

            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <form v-if="showSearch" class="form-inline my-2 my-lg-0" >
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </ul>

<!--                <router-link to="/richTable" class="m-2 btn btn-info">richTable</router-link>-->
                <a href="" class="m-2 btn btn-info">filter</a>
                <button class="m-2 btn btn-info" @click="changeTable"> Change Table </button>

            </div>
        </nav>
    </div>
</template>

<script>
    // import DropdownButton from "./DropdownButton";

    export default {
        name: "HeaderMenu",
        // components: {
        //     'dropdownbutton': DropdownButton
        // }

        props: {
            showSearch: Boolean
        },

        methods:{
            changeTable(){

                let hash = window.location.hash;

                if(hash === '#/' || hash === '#/poorTable'){
                    document.location.href = '/#/richTable'
                }else{
                    document.location.href = '/#/poorTable'
                }
            }
        }
    }
</script>

<style scoped>

</style>