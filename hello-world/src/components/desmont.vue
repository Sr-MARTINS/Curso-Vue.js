<template>
    <header class="header">
       <slot name="title"></slot>
       <slot name="description"> </slot>
       <slot></slot>
    </header>
</template>

<script>
    export default {
        beforeMount() {
            console.log('BeforeMount')
        },
        unmounted() {
            console.log('Unmountd')
        }
    }
</script>

<style> 
    header h1 {
        font-size: 2rem;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>