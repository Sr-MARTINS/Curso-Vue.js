<!--
    SINGLE FILE COMPONENT - SFC
    "componete este onde agrupa os arquivo de forma especifica - 'o template - a logica e o estilo' "
-->

<!--TEMPLATE - HTML -->
<template>
    <header class="header">
        Header
    </header>

    <div>

        <div v-for="(obj, index) in todos" 
            v-bind:key="obj.id" class="list">
           {{ index }} - {{ obj.title }}
        </div>

    </div>
</template>

<!--LOGICA - JS -->
<script>
    export default {
        name: 'App',
        data() {
            return {
                todos: [ 
                        { 
                            "userId": 1, 
                            "id": 1, 
                            "title": "delectus aut autem", 
                            "completed": false 
                        }, 
                        { 
                            "userId": 1, 
                            "id": 2, 
                            "title": "quis ut nam facilis et officia qui", 
                            "completed": false 
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
                    ]
            }
        }
    }
</script>

<!--ESTILO - CSS -->
<style>
 
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