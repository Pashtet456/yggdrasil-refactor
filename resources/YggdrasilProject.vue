<template>
    <v-app class="yggdrasil-project">
        <app-header></app-header>
        <app-main></app-main>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import AppHeader from '@root/layouts/AppHeader';
    import AppMain   from '@root/layouts/AppMain';
    import AppFooter from '@root/layouts/AppFooter';

    export default {
        name: 'YggdrasilProject',
        components: { AppFooter, AppMain, AppHeader },
    };
</script>

<style scoped>

</style>
