<template>
    <div>
        <div class="main main--mobile d-block d-sm-none">
            <div class="main-primary">
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
        <div class="main main--desktop d-none d-sm-block w-100">
            <v-container class="main-inner">
                <div class="main-title">
                    YAGGDRASIL PROJECT
                </div>
                <button class="main-btn">
                    Начать играть
                </button>
                <div class="main-server-menu">
                    <div v-for="item in serversMenu" :key="item.text" class="mt-2 main-server-item">
                        {{ item.text }}
                    </div>
                </div>
                <img :src="require(`../assets/img/main-bg.png`).default" alt="MainBG" class="ma-auto w-100 primary">
            </v-container>
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
                serversMenu: [
                    {
                        text: 'LOTR',
                        link: '',
                    },
                    {
                        text: 'VANILLA',
                        link: '',
                    },
                    {
                        text: 'TRY',
                        link: '',
                    },
                    {
                        text: 'TFC',
                        link: '',
                    }
                ],
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

        &-server {
            &-menu {
                position: absolute;
                bottom: 30%;
                left: -3%;
            }

            &-item {
                width: fit-content;
                padding: 4px 8px;
                font-weight: 500;
                background-color: var(--v-secondary-base) !important;
                color: var(--v-primary-base) !important;
            }
        }

        &-btn {
            padding: 1px 10px;
            position: absolute;
            bottom: 15%;
            left: 10%;
            font-size: 24px;
            font-weight: normal;
            letter-spacing: 0;
            background-color: var(--v-primary-base) !important;
            color: var(--v-secondary-base) !important;
            opacity: 0.6;
            text-decoration: underline;
            text-transform: none;
            border-radius: 0;
            transition: .4s opacity;

            &:hover {
                opacity: 1;
            }

            &:active  {
                color: white !important;
            }
        }

        &-inner {
            position: relative;
            margin-top: 20px;
            padding: 0;
            max-width: 100%;

            @media (min-width: 768px) {
                max-width: 85%;
                margin-top: 60px;
            }
            @media (min-width: 1366px) {
                max-width: 1100px;
            }
        }

        &-title {
            position: absolute;
            left: 20px;
            font-size: 40px;
            top: -20px;

            @media (min-width: 1024px) {
                font-size: 60px;
                top: -30px;
            }
        }

        &-primary {
            height: 100vh;
         }

        &--mobile {
            margin: -64px 0 0 0;
        }
    }
</style>
