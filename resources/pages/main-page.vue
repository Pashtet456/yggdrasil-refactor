<template>
    <div class="main d-block d-sm-none">
        <div class="main-primary main-primary--mobile">
            1
        </div>

        <div class="main-inner">
            2
            <v-form @submit.prevent="submit">
                <v-text-field type="email" v-model="email">
                </v-text-field>
                <v-text-field type="password" v-model="password">
                </v-text-field>
                <v-btn type="submit">Send</v-btn>
            </v-form>
        </div>
    </div>
</template>

<script>
    import AppSkinViewer from '@components/AppSkinViewer';

    export default {
        name: 'mainPage',
        components: { AppSkinViewer },
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

<style scoped lang="scss">
    .main {
        margin: -64px 0 0 0;
        padding: 0;
        width: 100%;

        &-primary {
            height: 100vh;

            &--mobile {
                background: url("../assets/img/main-bg--mobile.png");
                background-size: cover;
            }
         }

    }
</style>
