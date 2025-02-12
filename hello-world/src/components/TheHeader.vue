<!--TEMPLATE - HTML -->
<template>
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
        <desMont>
            <template v-slot:title>
                <h1>Home</h1>
            </template>

            <template v-slot:description>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </template>

        </desMont>

    </div> -->

    <!-- <div>
        <p class="card">Test</p>
        <BaseCard/>
    </div> -->
    
    <BaseAlert 
        v-if="showClose"
        @clickMan="Close"
        variant="danger"
    >

    </BaseAlert>      
</template>

<!--LOGICA - JS -->
<script>

import BaseAlert from './BaseAlert.vue';
// import BaseCard from './BaseCard.vue';

    export default {
        name: 'App',
       components: {BaseAlert},
        data() {
            return {
                showClose: true,
            }
        },

        //HOOKS
        // beforeCreate() {},
        // created() {},
        // beforeMount() {},
        // mounted() {},

        // watch: {},
        // computed: {},
        methods: {
            Close() {
                this.showClose = false
                console.log("click")
            }
        }

    }
</script>

<!--ESTILO - CSS -->
<style>
    
</style>