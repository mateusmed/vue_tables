<template>
    <div class="container-fluid">
            <mdb-datatable
                    :data="'http://localhost:3000/complex'"
                    striped
                    bordered
                    :display="25"
                    :sorting="true"
            />
    </div>

</template>

<script>

    import { mdbDatatable } from 'mdbvue';

    export default {
        name: "TablePagination",
        components: {
            mdbDatatable
        }
    }

</script>

<style scoped>

</style>