<template>
    <header>
        <H1>Componets Vue</H1>
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