<template>
    <v-container fluid ma-0 pa-0 id="languages">
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex>
                <v-card flat color="grey lighten-5">
                    <v-divider></v-divider>
                    <v-card-title>
                        <v-flex ma-3 text-xs-center>
                            <span class="headline font-weight-light blue-grey--text">Languages</span>
                        </v-flex>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-container fluid>
                            <v-layout justify-space-around>
                                <v-flex xs5>
                                    <v-layout column>
                                        <v-flex
                                                v-for="language of languages"
                                                :key="language.name"
                                        >
                                            <v-layout column>
                                                <v-flex text-xs-left>
                                                    <span class="blue-grey--text">{{language.name}}</span>
                                                </v-flex>
                                                <v-flex>
                                                    <v-progress-linear
                                                            class="mt-1 mb-2"
                                                            rounded
                                                            color="blue"
                                                            height="8"
                                                            :value="language.value"
                                                    ></v-progress-linear>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-actions>
                </v-card>
                <v-divider></v-divider>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Languages",
        data: () => ({
            languages: [
                {
                    name: 'Russian',
                    value: 10
                },
                {
                    name: 'Ukranian',
                    value: 92
                },
                {
                    name: 'English',
                    value: 16
                },
            ]
        }),
    }
</script>

<style scoped>

</style>