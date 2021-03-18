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
        <app-skin-viewer
                :height='400'
                :width='400'
                bgColor="#aaaaaa">

            <template v-slot:skinContainer>
                <canvas id="skinContainer"/>
            </template>
            <template v-slot:rotateAnimation="{ rotateAnimationChange, rotateAnimation }">
                <label>
                    <input id="rotateAnimation"
                           type="checkbox"
                           @change="rotateAnimationChange($event.target.checked)">
                    Enable
                </label>
                <label>
                    Speed:
                    <input type="number"
                           value="1"
                           step="0.1"
                           id="rotateAnimationSpeed"
                           @change="rotateAnimation ? rotateAnimation.speed = $event.target.value : null">
                </label>
            </template>
        </app-skin-viewer>
    </v-container>
</template>

<script>
    import AppSkinViewer from '@root/components/AppSkinViewer';

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

<style scoped>

</style>
