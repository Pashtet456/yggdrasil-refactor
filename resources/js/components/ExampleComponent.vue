<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="image_fill">
                        <img :src="require(`../../assets/img/${imageName}`).default" alt="Logo">
                    </div>
                </div>
            </div>
        </div>
        <div class="lotr">
            <div class="element">
                Lorem ipsum dolor sit amet.
            </div>
        </div>
        <div class="app">
            <div class="element">
                Lorem ipsum dolor sit amet.
            </div>
        </div>
        <second-component></second-component>
        <form action="/api/auth" method="post">
            <input type="text">
            <button type="submit">
                qqq
            </button>
        </form>
    </div>
</template>

<script>
    import SecondComponent from '@/components/SecondComponent';
    export default {
        components: { SecondComponent },
        data() {
            return {
                image: 'resources/assets/img/vrazrabotke.png',
                imageName: 'vrazrabotke.png',
            };
        }
    }
</script>

<style scoped lang="scss">
    .card {
        height: 80px;
    }
</style>
