<template>
    <div>
        donate-page
        <button @click="send('gulag.pw', '25565')">
            Send
        </button>
        {{ info }}
        {{ canItGetInfo }}
    </div>
</template>

<script>
    import { getServerInfo } from '@root/lib/requests/serverInfo.js'

    export default {
        name: 'donatePage',
        data(){
            return {
                info: null,
                canItGetInfo: null,
            }
        },
        methods: {
            async send(host, port = null) {
                try {
                    this.info = await getServerInfo( host, port, (host, port) => {
                        if ( this.canItGetInfo ) {
                            window.setTimeout( () => {
                                this.send(host, port)
                            }, 1000, host, port )
                        }
                    } )
                } catch ( e ) {
                    console.log(e.response.data)
                }
            },
        },
        beforeMount() {
            this.canItGetInfo = true;
        },
        beforeDestroy() {
            this.canItGetInfo = false;
        }
    };
</script>

<style scoped>

</style>
