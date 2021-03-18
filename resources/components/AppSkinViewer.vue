<template>
    <div>
        <canvas id="skin_container"></canvas>

        <div class="controls">

            <button v-show="false" type="button" @click="resetAll">
                Reset All
            </button>

            <div v-show="false">
                <label>
                    Width:
                    <input type="number" :value="width" @change="skinViewer.width = $event.target.value" ref="canvasWidth">
                </label>

                <label>
                    Height:
                    <input type="number" :value="height" @change="skinViewer.height = $event.target.value" ref="canvasHeight">
                </label>
            </div>

            <div v-show="false">
                <label>
                    Global Speed:
                    <input type="number" value="1" step="0.1" @change="skinViewer.animations.speed = $event.target.value" ref="globalAnimationSpeed">
                </label>

                <button type="button" class="control" @click="skinViewer.animations.paused = !skinViewer.animations.paused">
                    Pause / Resume
                </button>

                <div>
                    <label class="control">
                        <input id="rotate_animation" type="checkbox" @change="rotateAnimationChange($event.target.checked)" ref="rotateAnimation">
                        Enable
                    </label>
                    <label class="control">
                        Speed:
                        <input type="number" value="1" step="0.1" ref="rotateAnimationSpeed" @change="rotateAnimation ? rotateAnimation.speed = $event.target.value : null">
                    </label>
                </div>

                <div>
                    <div id="primaryAnimation">
                        <label>
                            <input name="primaryAnimation" type="radio" value="" checked @change="primaryAnimationChange($event.target.value)">
                            None
                        </label>
                        <label>
                            <input name="primaryAnimation" type="radio" value="walk" @change="primaryAnimationChange($event.target.value)">
                            Walk
                        </label>
                        <label>
                            <input name="primaryAnimation" type="radio" value="run" @change="primaryAnimationChange($event.target.value)">
                            Run
                        </label>
                        <label>
                            <input name="primaryAnimation" type="radio" value="fly" @change="primaryAnimationChange($event.target.value)">
                            Fly
                        </label>
                    </div>
                    <label class="control">
                        Speed:
                        <input type="number" value="1" step="0.1" ref="primaryAnimationSpeed" @change="primaryAnimation !== null ? primaryAnimation.speed = $event.target.value : null">
                    </label>
                </div>
            </div>
            <div v-show="false">
                <div>
                    <label>
                        <input type="checkbox" ref="controlRotate" checked @change="orbitControl.enableRotate = !orbitControl.enableRotate">
                        Enable Rotate
                    </label>
                    <label>
                        <input type="checkbox" ref="controlZoom" checked @change="orbitControl.enableZoom = !orbitControl.enableZoom">
                        Enable Zoom
                    </label>
                    <label>
                        <input type="checkbox" ref="controlPan" @change="orbitControl.enablePan = !orbitControl.enablePan">
                        Enable Pan
                    </label>
                </div>
            </div>

            <div v-show="false">
                <table id="layers_table">
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
            </div>

            <div>
                <div>
                    <input type="file" accept="image/*" class="d-none" @change="reloadSkin" ref="skinUrlUpload">
                    <button type="button" class="control" @click="$refs.skinUrlUpload.click()">
                        Browse...
                    </button>
                    <button @click="saveSkin">
                        Save skin
                    </button>
                </div>
                <div v-show="false">
                    <label>Skin URL:
                        <input ref="skinUrl" type="text" :value="require('img/1_8_texturemap_redux.png').default" placeholder="none" list="default_skins" @change="reloadSkin">
                    </label>
                    <datalist id="default_skins">
                        <option :value="require('img/1_8_texturemap_redux.png').default"></option>
                        <option :value="require('img/hacksore.png').default"></option>
                        <option :value="require('img/haka.png').default"></option>
                        <option :value="require('img/1_8_texturemap_redux.png').default"></option>
                    </datalist>
                </div>
                <label v-show="false">
                    Model:
                    <select ref="skinModel" @change="reloadSkin">
                        <option value="auto-detect" selected>Auto detect</option>
                        <option value="default">Default</option>
                        <option value="slim">Slim</option>
                    </select>
                </label>
            </div>
        </div>
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
            }
        },
        props: {
            height: Number,
            width: Number,
            bgColor: String,
        },
        methods: {
            reloadSkin() {
                const input = this.$refs.skinUrl;
                const url = input.value;
                if (url === "") {
                    this.skinViewer.loadSkin(null);
                    console.log('It`s ok')
                } else {
                    this.skinViewer.loadSkin(url, this.$refs.skinModel.value)
                        .then(() => console.log('It`s ok'))
                        .catch(e => {
                            console.log('It is not ok');
                        });
                }
            },
            rotateAnimationChange(isChecked) {
                if (isChecked && this.rotateAnimation === null) {
                    this.rotateAnimation = this.skinViewer.animations.add(skinview3d.RotatingAnimation);
                    this.rotateAnimation.speed = this.$refs.rotateAnimationSpeed.value;
                } else if (!isChecked && this.rotateAnimation !== null) {
                    this.rotateAnimation.resetAndRemove();
                    this.rotateAnimation = null;
                }
            },
            primaryAnimationChange( value ) {
                if ( this.primaryAnimation !== null) {
                    this.primaryAnimation.resetAndRemove();
                    this.primaryAnimation = null;
                }
                if ( value ) {
                    this.primaryAnimation = this.skinViewer.animations.add(this.availableAnimations[value]);
                    this.primaryAnimation.speed = this.$refs.primaryAnimationSpeed.value;
                }
            },
            resetAll() {
                this.skinViewer.dispose();
                this.orbitControl.dispose();
                this.initializeViewer();
                this.reloadSkin();
            },
            layersChange(target) {
                this.skinViewer.playerObject.skin[target.dataset.part][target.dataset.layer].visible = target.checked;
            },
            initializeControls() {
                const skinReader = new FileReader();
                skinReader.addEventListener("load", e => {
                    this.$refs.skinUrl.value = skinReader.result;
                    this.reloadSkin();
                });

                this.$refs.skinUrlUpload.addEventListener("change", e => {
                    const file = e.target.files[0];
                    if (file !== undefined) {
                        skinReader.readAsDataURL(file);
                    }
                });
            },
            initializeViewer() {
                this.skinViewer = new skinview3d.FXAASkinViewer({
                    canvas: document.getElementById("skin_container"),
                    alpha: false
                });
                this.skinViewer.renderer.setClearColor(this.bgColor);
                this.orbitControl = skinview3d.createOrbitControls(this.skinViewer);
                this.rotateAnimation = null;
                this.primaryAnimation = null;

                this.skinViewer.width = this.$refs.canvasWidth.value;
                this.skinViewer.height = this.$refs.canvasHeight.value;

                this.skinViewer.animations.speed = this.$refs.globalAnimationSpeed.value;

                if (document.getElementById("rotate_animation").checked) {
                    this.rotateAnimation = this.skinViewer.animations.add(skinview3d.RotatingAnimation);
                    this.rotateAnimation.speed = this.$refs.rotateAnimationSpeed.value;
                }

                const primaryAnimationName = document.querySelector('#primaryAnimation input:checked').value;

                if (primaryAnimationName !== "") {
                    this.primaryAnimation = this.skinViewer.animations.add(this.availableAnimations[primaryAnimationName]);
                    this.primaryAnimation.speed = this.$refs.primaryAnimationSpeed.value;
                }

                this.orbitControl.enablePan =  this.$refs.controlPan.checked;
                this.orbitControl.enableZoom = this.$refs.controlZoom.checked;
                this.orbitControl.enableRotate = this.$refs.controlRotate.checked;

                for (const part of this.skinParts) {
                    for (const layer of this.skinLayers) {
                        this.skinViewer.playerObject.skin[part][layer].visible =
                            document.querySelector(`#layers_table input[type="checkbox"][data-part="${part}"][data-layer="${layer}"]`).checked;
                    }
                }
            },
            saveSkin() {
                const file = this.$refs.skinUrlUpload.files[0];

                if (file) {
                    console.log(file)
                    console.log('File was saved')
                } else {
                    console.log('Error')
                }
            },
        },
        mounted() {
            this.initializeControls();
            this.initializeViewer();
            this.reloadSkin();
        }
    };

</script>

<style scoped>

</style>
