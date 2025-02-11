<!--
    SINGLE FILE COMPONENT - SFC
    "componete este onde agrupa os arquivo de forma especifica - 'o template - a logica e o estilo' "
-->

<!--TEMPLATE - HTML -->
<template>

    <!-- <h1 :class="{'titel': true, 'titel-home': home}">
        Curso de Vue.js
    </h1>

    <p :class="['subTitle', 'tite']">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium rerum minima voluptatem beatae incidunt
    </p>

    <p :style="pStyle"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at impedit libero delectus incidunt illo. Quas </p> -->

    <!-- <header class="header">
        Header
    </header> -->

    <!-- <div>

        <div v-for="(obj, index) in todos" 
            v-bind:key="obj.id" class="list">

            <img v-if="obj.myImg" v-bind:src="obj.myImg">
            {{ index }} - {{ obj.title }}
        </div>

    </div> -->

    <!-- <div>
        <label>Nome: </label>  <br>

        <input type="text" v-model="name"> <br>

        {{ name }}
    </div> -->

    <!-- <div>
        <label>Sports: </label> <br>
        <select v-model="sports">
            <option value="">Escolha</option> 
            <option value="futboll">Futboll</option> 
            <option value="tenis">Tenis</option> 
            <option value="basquete">Basquete</option> 
        </select> <br>
        {{ sports }}
    </div> -->

    <!-- <div>
        <label>NewSelection: </label> <br>
        <input  v-model="newsLeter" type="radio" value="sim"> Sim
        <input  v-model="newsLeter" type="radio" value="não"> Não
        
        <br>
        {{ newsLeter }}
    </div> -->

    <!-- <div>
        <label> Escolha uma cor: </label> <br>
        <select v-model="cores"> 
            <option value="">Cores</option>
            <option value="branco">Branco</option>
            <option value="preto">Preto</option>
            <option value="azul">Azul</option>
        </select> <br>
        {{ cores }}
    </div>  -->
    
    <!-- <div>
        <button v-on:click.once="event">
            Enviar
        </button>
    </div> <br><br> -->

    <!-- <div @mouseover="onMouse()" @mouseout="outside()">
        <h2>Mouse over</h2>
    </div>  -->

    <!-- <form action="https://www.google.com.br/?hl=pt-BR" @submit.prevent="onSubmit()">
        <button  type="submit">
            Derecionamento
        </button>
    </form> 
    <div>
        <button @click="mostrar()">
           mostra
        </button>
    </div> 

    <div>
        {{ frastElement }}
    </div>  -->

    <!-- <div>
        <h2>Todos em Aberto</h2>

        <div v-for="index in todos" :key="index.id">
            {{ index.title }} 
        </div> <br>

        <h2>Todos complet</h2>
        <div v-for="ind in complet" :key="ind.id">
            {{ ind.title }}
        </div>

        <h2>Todos</h2>
        <div v-for="ind in todos" :key="ind.id">
            <input type="checkbox" v-model="ind.completed">
            {{ ind.title }}
        </div>
    </div> -->

    <!-- <div>
        <input type="text" v-model="isName"> <br><br>
            {{ isName }}
        
    </div> -->

    <!-- <div>
        <select v-model="pageCont">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select> <br> 
        {{ pageCont }}
    </div> -->

    <!-- <div>
        <desmont v-if="showDesmont"/>
        <h1>Hello World</h1>
        {{ isName }}  <br><br> 
        
        <button @click="showDesmont = !showDesmont">
            Toggle <>
        </button>
    </div> -->

    <div>
        <desmont>
            <template v-slot:title>
                <h1>Home</h1>
            </template>

            <template v-slot:description>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </template>

            <template>
                <p>mart</p>
            </template>
        </desmont>

    </div>
</template>

<!--LOGICA - JS -->
<script>
    import desmont from '@/components/desmont.vue'
    export default {
        name: 'App',
        components: {desmont},
        data() {
            return {
                isName: 'Martins',
                showDesmont: true,

                pageCont: '',

                // isName: "",

                sports:'futboll',
                name: "Jonh",

                newsLeter: '',

                cores: '',

                home: true,
                pStyle: {'color': 'aqua', 'background-color': 'black' },
                classVar: 'titel',

                todos: [ 
                        { 
                            "userId": 1, 
                            "id": 1, 
                            "title": "delectus aut autem", 
                            "completed": false,
                            // myImg:'https://placehold.co/150'
                        }, 
                        { 
                            "userId": 1, 
                            "id": 2, 
                            "title": "quis ut nam facilis et officia qui", 
                            "completed": false,
                            // myImg:'https://placehold.co/150'
                        }, 
                        { 
                            "userId": 1, 
                            "id": 3, 
                            "title": "fugiat veniam minus", 
                            "completed": false 
                        }, 
                        { 
                            "userId": 1, 
                            "id": 4, 
                            "title": "et porro tempora", 
                            "completed": true 
                        }, 
                        { 
                            "userId": 1, 
                            "id": 5, 
                            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum", 
                            "completed": false 
                        }, 
                    ],

                user: {
                frest_name: 'Joao',
                last_name: 'Victor'
                },
            }
        },

        //HOOKS
        // beforeCreate() {
        //     console.log("beforCreate")
        //     console.log( `Estado:`, this.isName)
        //     console.log(`DOM:`, this.$el)
        // },
        // created() {
        //     console.log("Create")
        //     console.log( `Estado:`, this.isName)
        //     console.log(`DOM:`, this.$el)
        // },
        // beforeMount() {
        //     console.log("beforeMount")
        //     console.log( `Estado:`, this.isName)
        //     console.log(`DOM:`, this.$el)
        // },
        // mounted() {
        //     console.log("mounted")
        //     console.log( `Estado:`, this.isNam)
        //     console.log(`DOM:`, this.$el)
        // },

        // watch: {
        //     isName(vl) {
        //         if(vl.length >= 3) {
        //             this.saveUserName()
        //         }
        //     },
        //     pageCont () {
        //         this.ContElements()
        //     }
        // },
 
        // computed: {
        //     frastElement() {
        //         return `${this.user.frest_name} ${this.user.last_name}`
        //     },

        //     undeComplet() {
        //         return this.todos.filter(todo => !todo.completed)
        //     },

        //     complet() {
        //         return this.todos.filter(todsComple => todsComple.completed)
        //     }


        // },

        // methods: {
        //     saveUserName() {
        //         console.log("Ajax")
        //         console.log(this.isName)
        //     },
        //     ContElements () {
        //         console.log("Ajax")
        //         console.log(this.pageCont)
        //     },


        //     event($evt) {
        //         console.log('click', $evt);
        //     },
        //     // onMouse() {
        //     //     console.log('moveu')
        //     // },
        //     // outside() {
        //     //     console.log('soltou')
        //     // },
        //     onSubmit() {
        //         console.log("redirecionol")
        //     },
        //     mostrar() {
        //         console.log(this.user)
        //     },

        // }

    }
</script>

<!--ESTILO - CSS -->
<style>
   
</style>