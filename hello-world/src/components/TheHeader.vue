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

    <div>

        <div v-for="(obj, index) in todos" 
            v-bind:key="obj.id" class="list">

            <img v-if="obj.myImg" v-bind:src="obj.myImg">
            {{ index }} - {{ obj.title }}
        </div>

    </div>

    <br><br>

    <div>
        <label>Nome: </label>  <br>

        <input type="text" v-model="name"> <br>

        {{ name }}
    </div>
    <br> <br>

    <div>
        <label>Sports: </label> <br>
        <select v-model="sports">
            <option value="">Escolha</option> 
            <option value="futboll">Futboll</option> 
            <option value="tenis">Tenis</option> 
            <option value="basquete">Basquete</option> 
        </select> <br>
        {{ sports }}
    </div>
    <br><br>


    <div>
        <label>NewSelection: </label> <br>
        <input  v-model="newsLeter" type="radio" value="sim"> Sim
        <input  v-model="newsLeter" type="radio" value="não"> Não
        
        <br>
        {{ newsLeter }}
    </div>
    <br><br>

    <div>
        <label> Escolha uma cor: </label> <br>
        <select v-model="cores"> 
            <option value="">Cores</option>
            <option value="branco">Branco</option>
            <option value="preto">Preto</option>
            <option value="azul">Azul</option>
        </select> <br>
        {{ cores }}
    </div> <br> <br>
    
    <div>
        <button v-on:click.once="event">
            Enviar
        </button>
    </div> <br><br>

    <!-- <div @mouseover="onMouse()" @mouseout="outside()">
        <h2>Mouse over</h2>
    </div> <br><br> -->

    <form action="https://www.google.com.br/?hl=pt-BR" @submit.prevent="onSubmit()">
        <button  type="submit">
            Derecionamento
        </button>
    </form> <br><br>

    <div>
        <button @click="mostrar()">
           mostra
        </button>
    </div> <br><br>

    <div>
        {{ frastElement }}
    </div> <br><br>

    <div>
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
    </div>


</template>

<!--LOGICA - JS -->
<script>
    export default {
        name: 'App',
        data() {
            return {
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

        computed: {
            frastElement() {
                return `${this.user.frest_name} ${this.user.last_name}`
            },

            undeComplet() {
                return this.todos.filter(todo => !todo.completed)
            },

            complet() {
                return this.todos.filter(todsComple => todsComple.completed)
            }


        },
        

        methods: {
            event($evt) {
                console.log('click', $evt);
            },
            // onMouse() {
            //     console.log('moveu')
            // },
            // outside() {
            //     console.log('soltou')
            // },
            onSubmit() {
                console.log("redirecionol")
            },
            mostrar() {
                console.log(this.user)
            }
        }

    }
</script>

<!--ESTILO - CSS -->
<style>
    .titel {
        font-size: 30px;
        color:  #fa3030;
    }
    .titel-home {
        font-size: 50px;
        color: green;
    } 
    .subTitle {
        color: yellow;
    }

 
    .header {
        font-size: 1rem;
        background-color: aqua;
    }

    .list {
        max-width: 50%;
        background-color: black;
        margin: 5px auto;
        padding: 8px  10px;
        text-align: start;
        color: #fff;
    }
</style>