<template>
    <v-container id="aboutme">
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex>
                asd
            </v-flex>

            <v-flex xs12>
                <v-img
                        :src="require('../assets/logo.svg')"
                        class="my-3"
                        contain
                        height="200"
                ></v-img>
            </v-flex>

            <v-flex
                    xs12
                    mb-5
            >
                <h2 class="headline font-weight-bold mb-3">AboutMe</h2>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped>

</style>