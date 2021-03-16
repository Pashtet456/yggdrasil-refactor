<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
                    <img :src="require(`../../assets/img/${imageName}`).default" alt="Logo">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                image: 'resources/assets/img/vrazrabotke.png',
                imageName: 'vrazrabotke.png',
            };
        }
    }
</script>
