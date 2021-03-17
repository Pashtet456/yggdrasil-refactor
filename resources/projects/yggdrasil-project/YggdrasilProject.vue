<template>
    <v-app class="yggdrasil-project">
        <app-header></app-header>
        <app-main></app-main>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import AppHeader from '@Yggdrasil/layouts/AppHeader';
    import AppMain   from '@Yggdrasil/layouts/AppMain';
    import AppFooter from '@Yggdrasil/layouts/AppFooter';

    export default {
        name: 'YggdrasilProject',
        components: { AppFooter, AppMain, AppHeader },
    };
</script>

<style scoped>

</style>
