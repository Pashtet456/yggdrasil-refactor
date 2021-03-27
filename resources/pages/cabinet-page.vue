<template>
    <v-container class="cabinet">
        <div class="cabinet-inner d-flex">
            <div class="cabinet-skin">
                <app-skin-viewer
                    :height='400'
                    :width='400'
                    bgColor="#aaaaaa" class="d-flex flex-column">
                    <template v-slot:skinContainer>
                        <canvas id="skinContainer" class="skinContainer"/>
                    </template>

                    <template v-slot:browseButton="{ skinUrlUploadClick }">
                        <button type="button" @click="skinUrlUploadClick">
                            Открыть
                        </button>
                    </template>

                    <template v-slot:saveButton="{ saveSkin }">
                        <button @click="saveSkin">
                            Сохранить
                        </button>
                    </template>

                </app-skin-viewer>
            </div>

            <div class="cabinet-info">
                dsdas
            </div>
        </div>
    </v-container>
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
