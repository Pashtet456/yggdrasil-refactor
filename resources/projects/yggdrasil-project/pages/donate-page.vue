<template>
    <div>
        donate-page
        <button @click="send">
            Send
        </button>
        {{ info }}
    </div>
</template>

<script>
    export default {
        name: 'donatePage',
        data(){
            return {
                info: null,
            }
        },
        methods: {
            send() {
                axios.get('/server')
                    .then( res => {
                        this.info = res.data
                        console.log(res.data)
                    })
                    .catch( e => {
                        this.info = e;
                        console.log(e)
                    });
            },
        },
    };
</script>

<style scoped>

</style>
