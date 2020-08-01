<template>

    <div class="container-fluid">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">dateInclusion</th>
                    <th scope="col">dateLastChange</th>
                    <th scope="col">rule</th>
                    <th scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.dateInclusion }}</td>
                    <td>{{ item.dateLastChange }}</td>
                    <td>{{ item.rule_id }}</td>
                    <td>{{ item.status }}</td>
                </tr>
            </tbody>
        </table>

        <div class="align-content-center">
            <nav aria-label="...">
                <ul class="pagination align-content-center">

                    <li class="page-item">
                        <button class="page-link" @click="firstPage"> First </button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" @click="afterPage"> Anterior </button>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#">
                            {{actualPage}}
                        </a>
                    </li>
                    <li class="page-item">
                        <button class="page-link" @click="nextPage"> Proximo </button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" @click="lastPage"> Last </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import ApiService from "../../services/api-service";
    import UtilService from "../../services/util-service";

    import parse from 'parse-link-header'

    export default {
        name: "SimpleTable",
        props:{
            // usado para atributos publicos do componente
        },
        data(){
            // usado para atributos privados do componenete
            return{
                items: [],
                actualPage: 1,
                first: undefined,
                prev: undefined,
                next: undefined,
                last: undefined,
                lastPageNumber: 0
            }
        },
        mounted() {
            ApiService.get(`/user?_page=${this.actualPage}&_limit=5`)
                .then((result) => {
                    console.log('------->', result);
                    this.updateAttributes(result);
                });
        },

        methods:{

            updateAttributes(result){
                let baseUrl = ApiService.getBaseUrl();
                let parsed = parse(result.headers['link']);
                this.first = parsed['first']['url'].replace(baseUrl, '');

                if(parsed['prev'] && parsed['prev']['url']){
                    this.prev = parsed['prev']['url'].replace(baseUrl, '');
                }
                if(parsed['next'] && parsed['next']['url']) {
                    this.next = parsed['next']['url'].replace(baseUrl, '');
                }

                let lastUrl = parsed['last']['url'];
                this.lastPageNumber = UtilService.getParameterByName('_page', lastUrl);
                this.last =  lastUrl.replace(baseUrl, '');
                this.items = result.data;
            },

            firstPage(){
                ApiService.get(this.first)
                    .then((result) => {
                        this.updateAttributes(result);
                    });
                this.prev = undefined;
                this.actualPage = 1;
            },
            afterPage(){
                ApiService.get(this.prev)
                    .then((result) => {
                        this.updateAttributes(result);
                    });
                if(this.actualPage > 1){
                    this.actualPage--;
                }
            },
            nextPage(){
                ApiService.get(this.next)
                    .then((result) => {
                        this.updateAttributes(result);
                    });
                if(this.actualPage < this.lastPageNumber){
                    this.actualPage++;
                }
            },
            lastPage(){
                ApiService.get(this.last)
                    .then((result) => {
                        this.updateAttributes(result);
                    });
                this.actualPage = this.lastPageNumber;
                this.next = undefined;
            }
        }

    }
</script>

<style scoped>

</style>