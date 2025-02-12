<template>
    <div :class="baseClass" id="cardAlert">
        <P>Seu formulario foi enviado com sucessso!</P>

        <button @click="onclick">
            x
        </button>
    </div>
</template>

<script>
    export default {
        props: ['variant'],
        computed: {
            baseClass() {
                return [
                   'alert',
                    this.variant ? `alert-${this.variant}` : ''
                ]
            }
        },
        methods: {
            onclick() {
                this.$emit('clickMan')
                console.log("clickou")
            }
        }
    }
</script>

<style scoped>
    #cardAlert {
        display: flex;
        justify-content: space-between;
    }
    #cardAler button {
        height: 10px;
        padding: 5px;
    }
    .alert {
        background-color: wheat;
        width: 300px;
        padding: 5px;
        border-radius: 1rem;
    }
    .alert-sucesse {
        background-color: #43ee43;
        width: 300px;
        padding: 5px;
        border-radius: 1rem;
    }
    .alert-danger {
        background-color: red;
        width: 300px;
        padding: 5px;
        border-radius: 1rem;
    }
</style>