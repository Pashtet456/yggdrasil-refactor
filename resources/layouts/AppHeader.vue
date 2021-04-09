<template>
    <v-app-bar class="shrink pa-0 ma-0">
        <div class="d-none d-sm-flex header justify-space-between w-100 fill-height align-center">
            <img :src="require(`../assets/img/logo.png`).default" alt="Logo" class="image_fill">

            <div class="header-nav d-flex">
                <v-list-item v-for="item in menu"
                             :key="item.title">
                    <router-link :to="item.link" class="ml-7 mr-7">
                        {{ item.title }}
                    </router-link>
                </v-list-item>
            </div>
        </div>
        <div class="d-flex d-sm-none justify-end w-100">
            <v-menu
                    transition="slide-y-transition"
                    bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs"
                            v-on="on"
                            large
                            color="secondary">
                        mdi-menu
                    </v-icon>
                </template>
                <v-list class="header-nav pa-0">
                    <v-list-item v-for="item in menu"
                                 :key="item.title">

                        <router-link :to="item.link">
                            {{ item.title }}
                        </router-link>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                menu: [
                    {
                        title: 'Главная',
                        link: '/',
                    },
                    {
                        title: 'Донат',
                        link: '/donate',
                    },
                    {
                        title: 'Серверы',
                        link: '/',
                    },
                    {
                        title: 'Правила',
                        link: '/',
                    },
                    {
                        title: 'Вход',
                        link: '/cabinet',
                    },
                ],
            }
        },
    };
</script>

<style lang="scss" scoped>


</style>
