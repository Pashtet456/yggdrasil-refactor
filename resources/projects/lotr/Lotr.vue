<template>
    <v-app class="lotr">
        <app-header></app-header>
        <app-main></app-main>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import AppHeader from '@Lotr/layouts/AppHeader';
    import AppMain   from '@Lotr/layouts/AppMain';
    import AppFooter from '@Lotr/layouts/AppFooter';

    export default {
        name: 'Lotr',
        components: { AppFooter, AppMain, AppHeader },
    };
</script>

<style scoped>

</style>
