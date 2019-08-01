<template>
    <v-container fluid ma-0 pa-0 id="aboutme">
        <v-layout >
            <v-flex>
                <v-parallax
                        dark
                        height="500"
                        :src="require('../assets/parallaxback.jpg')"
                >
                    <v-layout
                            align-center
                            column
                            justify-center
                    >
                        <img src="../assets/logo-stroke.png" height="200" width="200"/>
                        <h1 class="display-2 font-weight-thin mt-3">Bogdan Alyabyev</h1>
                        <h4 class="subheading mt-1 mb-5">.NET Developer</h4>
                       <v-btn dark>
                           GET PROJECTS
                       </v-btn>
                    </v-layout>
                </v-parallax>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "AboutMe",
    }
</script>

<style scoped>

</style>