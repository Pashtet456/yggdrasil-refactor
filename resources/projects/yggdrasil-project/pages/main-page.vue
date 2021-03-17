<template>
    <v-container>
        main-page
        <div style="height: 60px">
            <img class="image_fill" :src="require('img/vrazrabotke.png').default" alt="">
        </div>
        <div class="element">
            qerty
        </div>
        <v-form @submit.prevent="submit">
            <v-text-field type="email" v-model="email">
            </v-text-field>
            <v-text-field type="password" v-model="password">
            </v-text-field>
            <v-btn type="submit">Send</v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: 'mainPage',
        data() {
            return{
                email: null,
                password: null,
            }
        },
        methods: {
            submit() {
                axios.post('register',{
                    email: this.email,
                    password: this.password,
                })
            },
        },
    };
</script>

<style scoped>

</style>
