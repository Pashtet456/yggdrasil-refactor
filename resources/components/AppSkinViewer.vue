<template>
    <div v-bind="{ reloadSkin,
                   rotateAnimationChange,
                   primaryAnimationChange,
                   resetAllSettings,
                   layersChange,
                   saveSkin,
                   skinViewer,
                   availableAnimations,
                   orbitControl,
                   rotateAnimation,
                   primaryAnimation,
    }">

        <!-- Контейнер со скином -->
        <slot name="skinContainer">
            <canvas id="skinContainer"/>
        </slot>

        <!-- Изменение стандартных ширины и высоты -->
        <slot name="customSize" v-bind="{ skinViewer, width, height }">
            <label>
                Width:
                <input type="number" :value="width" @change="skinViewer.width = $event.target.value" id="canvasWidth">
            </label>
            <label>
                Height:
                <input type="number" :value="height" @change="skinViewer.height = $event.target.value" id="canvasHeight">
            </label>
        </slot>

        <!-- Изменение глобальной скорости -->
        <slot name="globalSpeed" v-bind="{ skinViewer }">
            Global Speed:
            <label>
                <input type="number"
                       value="1"
                       step="0.1"
                       @change="skinViewer.animations.speed = $event.target.value"
                       id="globalAnimationSpeed">
            </label>
        </slot>

        <!-- Кнопка паузы -->
        <slot name="pauseButton" v-bind="{ skinViewer }">
            <button type="button" @click="skinViewer.animations.paused = !skinViewer.animations.paused">
                Pause / Resume
            </button>
        </slot>

        <!-- Настройка вращения -->
        <slot name="rotateAnimation" v-bind="{ rotateAnimation, rotateAnimationChange }">
            <label>
                <input type="checkbox"
                       @change="rotateAnimationChange($event.target.checked)"
                       id="rotateAnimation">
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
        </slot>

        <!-- Настройка движений и их скорости -->
        <slot name="primaryAnimation" v-bind="{ primaryAnimation, primaryAnimationChange }">
            <div id="primaryAnimation">
                <label>
                    <input name="primaryAnimation"
                           type="radio"
                           value=""
                           checked
                           @change="primaryAnimationChange($event.target.value)">
                    None
                </label>
                <label>
                    <input name="primaryAnimation"
                           type="radio"
                           value="walk"
                           @change="primaryAnimationChange($event.target.value)">
                    Walk
                </label>
                <label>
                    <input name="primaryAnimation"
                           type="radio"
                           value="run"
                           @change="primaryAnimationChange($event.target.value)">
                    Run
                </label>
                <label>
                    <input name="primaryAnimation"
                           type="radio"
                           value="fly"
                           @change="primaryAnimationChange($event.target.value)">
                    Fly
                </label>
            </div>
            <label>
                Speed:
                <input type="number"
                       value="1"
                       step="0.1"
                       id="primaryAnimationSpeed"
                       @change="primaryAnimation !== null ? primaryAnimation.speed = $event.target.value : null">
            </label>
        </slot>

        <!-- Настройка возможностей пользователя -->
        <slot name="orbitControl" v-bind="{ orbitControl }">
            <label>
                <input type="checkbox"
                       id="controlRotate"
                       checked
                       @change="orbitControl.enableRotate = !orbitControl.enableRotate">
                Enable Rotate
            </label>
            <label>
                <input type="checkbox"
                       id="controlZoom"
                       checked
                       @change="orbitControl.enableZoom = !orbitControl.enableZoom">
                Enable Zoom
            </label>
            <label>
                <input type="checkbox"
                       id="controlPan"
                       @change="orbitControl.enablePan = !orbitControl.enablePan">
                Enable Pan
            </label>
        </slot>

        <!-- Настройка отображения частей тела -->
        <slot name="layersTable" v-bind="{ layersChange }">
            <table id="layersTable">
                <thead>
                    <tr>
                        <th></th>
                        <th>head</th>
                        <th>body</th>
                        <th>right arm</th>
                        <th>left arm</th>
                        <th>right leg</th>
                        <th>left leg</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>inner</th>
                        <td><input type="checkbox" data-layer="innerLayer" data-part="head" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="innerLayer" data-part="body" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="innerLayer" data-part="rightArm" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="innerLayer" data-part="leftArm" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="innerLayer" data-part="rightLeg" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="innerLayer" data-part="leftLeg" checked @change="layersChange($event.target)"></td>
                    </tr>
                    <tr>
                        <th>outer</th>
                        <td><input type="checkbox" data-layer="outerLayer" data-part="head" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="outerLayer" data-part="body" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="outerLayer" data-part="rightArm" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="outerLayer" data-part="leftArm" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="outerLayer" data-part="rightLeg" checked @change="layersChange($event.target)"></td>
                        <td><input type="checkbox" data-layer="outerLayer" data-part="leftLeg" checked @change="layersChange($event.target)"></td>
                    </tr>
                </tbody>
            </table>
        </slot>

        <!-- Группа "Кнопки" -->
        <slot name="buttons" v-bind="{ skinUrlUploadClick, saveSkin, returnInitialSkin, resetAllSettings }">

            <!-- Кнопка "Откррыть проводник" -->
            <slot name="browseButton" v-bind="{ skinUrlUploadClick }">
                <button type="button" @click="skinUrlUploadClick">
                    Открыть
                </button>
            </slot>

            <!-- Кнопка "Сбросить скин до текущего" -->
            <slot name="resetSkin" v-bind="{ returnInitialSkin }">
                <button type="button" @click="returnInitialSkin">
                    Сбросить скин
                </button>
            </slot>

            <!-- Кнопка "Сбросить все настройки окна со скином" -->
            <slot name="resetAllSettings" v-bind="{ resetAllSettings }">
                <button type="button" @click="resetAllSettings">
                    Сбросить настройки
                </button>
            </slot>

            <!-- Кнопка "Сохранить скин" -->
            <slot name="saveButton" v-bind="{ saveSkin }">
                <button @click="saveSkin">
                    Сохранить
                </button>
            </slot>
        </slot>

        <!-- Группа "Инпуты" -->
        <slot name="inputs" v-bind="{ skinUrl, skinUploadChange }">
            <!-- Инпут с выпадающим списком -->
            <slot name="textInput" v-bind="{ skinUrl }">
                <label>
                    <input type="text"
                           placeholder="none"
                           list="default_skins"
                           v-model="skinUrl"
                           @change="reloadSkin"/>
                </label>
            </slot>

            <!-- Инпут загрущик, в данный момент не работает вне самого компонента -->
            <slot name="loaderInput" v-bind="{ skinUploadChange }">
                <input type="file"
                       accept="image/*"
                       class="d-none"
                       @change="skinUploadChange($event.target)"
                       ref="skinUrlUpload">
            </slot>
        </slot>

        <!-- Поля инпута из выпадающего списка для загрузки скина, также настройки толщины -->
        <slot name="skinLoad" v-bind="{ saveSkin, reloadSkin }" class="d-none">
            <div>
                <datalist id="default_skins">
                    <option :value="require('img/1_8_texturemap_redux.png').default"></option>
                    <option :value="require('img/hacksore.png').default"></option>
                    <option :value="require('img/haka.png').default"></option>
                    <option :value="require('img/1_8_texturemap_redux.png').default"></option>
                </datalist>
            </div>
            <label>
                Model:
                <select id="skinModel" @change="reloadSkin">
                    <option value="auto-detect" selected>Auto detect</option>
                    <option value="default">Default</option>
                    <option value="slim">Slim</option>
                </select>
            </label>
        </slot>
    </div>
</template>
<script>
    import '@root/plugins/skinview3d.bundle.js';

    export default {
        name: 'AppSkinViewer',
        data() {
            return {
                skinParts: ["head", "body", "rightArm", "leftArm", "rightLeg", "leftLeg"],
                skinLayers: ["innerLayer", "outerLayer"],
                availableAnimations: {
                    walk: skinview3d.WalkingAnimation,
                    run: skinview3d.RunningAnimation,
                    fly: skinview3d.FlyingAnimation,
                },
                skinViewer: null,
                orbitControl: null,
                rotateAnimation: null,
                primaryAnimation: null,
                skinReader: null,
                skinUrl: null,
                initialSkin: null,
            }
        },
        props: {
            height: Number,
            width: Number,
            bgColor: String,
        },
        methods: {
            reloadSkin() {
                const input = this.skinUrl;
                if (input === "") {
                    this.skinViewer.loadSkin(null);
                    console.log('It`s ok')
                } else {
                    this.skinViewer.loadSkin(input, document.getElementById('skinModel').value)
                        .then(() => console.log('It`s ok'))
                        .catch(e => {
                            console.log('It is not ok');
                        });
                }
            },
            setInitialSkin() {
                this.initialSkin = require('img/1_8_texturemap_redux.png').default;
            },
            rotateAnimationChange(isChecked) {
                if (isChecked && this.rotateAnimation === null) {
                    this.rotateAnimation = this.skinViewer.animations.add(skinview3d.RotatingAnimation);
                    this.rotateAnimation.speed = document.getElementById('rotateAnimationSpeed').value;
                } else if (!isChecked && this.rotateAnimation !== null) {
                    this.rotateAnimation.resetAndRemove();
                    this.rotateAnimation = null;
                }
            },
            skinUrlUploadClick() {
                this.$refs.skinUrlUpload.click();
            },
            primaryAnimationChange( value ) {
                if ( this.primaryAnimation !== null) {
                    this.primaryAnimation.resetAndRemove();
                    this.primaryAnimation = null;
                }
                if ( value ) {
                    this.primaryAnimation = this.skinViewer.animations.add(this.availableAnimations[value]);
                    this.primaryAnimation.speed = document.getElementById('primaryAnimationSpeed').value;
                }
            },
            resetAllSettings() {
                this.skinViewer.dispose();
                this.orbitControl.dispose();
                this.initializeViewer();
                this.reloadSkin();
            },
            layersChange(target) {
                this.skinViewer.playerObject.skin[target.dataset.part][target.dataset.layer].visible = target.checked;
            },
            returnInitialSkin() {
                this.skinUrl = this.initialSkin;
                this.reloadSkin();
            },
            initializeControls() {
                this.skinUrl = this.initialSkin;
                this.skinReader = new FileReader();
                this.skinReader.addEventListener('load', () => {
                    this.skinUrl = this.skinReader.result;
                    this.reloadSkin();
                });
            },
            initializeViewer() {
                this.skinViewer = new skinview3d.FXAASkinViewer({
                    canvas: document.getElementById('skinContainer'),
                    alpha: false
                });
                this.skinViewer.renderer.setClearColor(this.bgColor);
                this.orbitControl = skinview3d.createOrbitControls(this.skinViewer);
                this.rotateAnimation = null;
                this.primaryAnimation = null;

                this.skinViewer.width = document.getElementById('canvasWidth').value;
                this.skinViewer.height = document.getElementById('canvasHeight').value;

                this.skinViewer.animations.speed = document.getElementById('globalAnimationSpeed').value;

                if (document.getElementById("rotateAnimation").checked) {
                    this.rotateAnimation = this.skinViewer.animations.add(skinview3d.RotatingAnimation);
                    this.rotateAnimation.speed = document.getElementById('rotateAnimationSpeed').value;
                }

                const primaryAnimationName = document.querySelector('#primaryAnimation input:checked').value;

                if (primaryAnimationName !== "") {
                    this.primaryAnimation = this.skinViewer.animations.add(this.availableAnimations[primaryAnimationName]);
                    this.primaryAnimation.speed = document.getElementById('primaryAnimationSpeed').value;
                }

                this.orbitControl.enablePan =  document.getElementById('controlPan').checked;
                this.orbitControl.enableZoom = document.getElementById('controlZoom').checked;
                this.orbitControl.enableRotate = document.getElementById('controlRotate').checked;

                for (const part of this.skinParts) {
                    for (const layer of this.skinLayers) {
                        this.skinViewer.playerObject.skin[part][layer].visible =
                            document.querySelector(`#layersTable input[type="checkbox"][data-part="${part}"][data-layer="${layer}"]`).checked;
                    }
                }
            },
            saveSkin() {
                const file = this.$refs.skinUrlUpload.files[0];
                const name = 'Miner';

                if (file) {
                    let formData = new FormData();
                    formData.append('fileToUpload', file);
                    formData.append('name', name);
                    axios.post('upload/image', formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .then(function (e) {
                            console.log(e.response.data);
                        });
                } else {
                    console.log('Error')
                }
            },
            skinUploadChange(target) {
                const file = target.files[0];
                if (file !== undefined) {
                    this.skinReader.readAsDataURL(file);
                }
            },
        },
        mounted() {
            this.setInitialSkin();
            this.initializeControls();
            this.initializeViewer();
            this.reloadSkin();
        }
    };

</script>

<style scoped>

</style>
