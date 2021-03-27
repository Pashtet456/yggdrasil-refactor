<template>
    <v-app-bar class="shrink pa-0 ma-0">
        <div class="header d-flex justify-space-between w-100 fill-height align-center">
            <img :src="require(`../assets/img/logo.png`).default" alt="Logo" class="image_fill">

            <div class="header-nav">
                <router-link to="/">Главная</router-link>
                <router-link to="/donate">Донат</router-link>
                <router-link to="/donate">Серверы</router-link>
                <router-link to="/donate">Правила</router-link>
                <router-link to="/cabinet">Вход</router-link>
            </div>
        </div>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppHeader',
    };
</script>

<style lang="scss" scoped>


</style>
