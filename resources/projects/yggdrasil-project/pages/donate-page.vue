<template>
    <div>
        donate-page
        <button @click="send">
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
            async send() {
                this.info = await getServerInfo( 'gulag.pw', '25565', () => {
                    if ( this.canItGetInfo ) {
                        window.setTimeout( () => {
                            this.send();
                            console.log( "yeah" )
                        }, 3000 )
                    }
                } )
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
