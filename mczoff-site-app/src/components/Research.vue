<template>
    <v-container ma-0 pa-0 fluid id="research">
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex>
                <v-card flat color="grey lighten-4">
                    <v-divider></v-divider>
                    <v-card-title>
                        <v-flex ma-3 text-xs-center>
                            <span class="headline font-weight-light blue-grey--text">Research</span>
                        </v-flex>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-container fluid>
                            <v-layout justify-space-around>
                                <v-flex hidden-sm-and-down xs8>
                                    <v-timeline>
                                        <v-timeline-item
                                                v-for="(research, i) in researchs"
                                                :key="i"
                                                :color="research.color"
                                                small
                                        >
                                            <template v-slot:opposite>
                                            <span
                                                    :class="`headline font-weight-bold ${research.color}--text`"
                                                    v-text="research.year"
                                            ></span>
                                            </template>
                                            <div class="py-0">
                                                <h2 :class="`headline font-weight-light mb-3 ${research.color}--text`">{{research.title}}</h2>
                                                <div>
                                                    {{research.content}}
                                                </div>
                                            </div>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-flex>

                                <v-flex hidden-md-and-up xs10>
                                    <v-timeline dense>
                                        <v-timeline-item
                                                v-for="(research, i) in researchs"
                                                :key="i"
                                                :color="research.color"
                                                small
                                        >
                                            <template v-slot:opposite>
                                                <span
                                                        :class="`headline font-weight-bold ${research.color}--text`"
                                                        v-text="research.year"
                                                ></span>
                                            </template>
                                            <div class="text-xs-left py-0">
                                                <h2 :class="`headline font-weight-light mb-3 ${research.color}--text`">{{research.title}}</h2>
                                                <h4>{{research.year}}</h4>
                                                <div>
                                                    {{research.content}}
                                                </div>
                                            </div>
                                        </v-timeline-item>
                                    </v-timeline>
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
        name: "Research",
        data: () => ({
            researchs: [
                {
                    title: 'Bachelor of Donetsk National University',
                    content: 'Faculty of Physics and Technology. Department of computer science. 09.03.01 Computer science and computing.',
                    color: 'blue-grey',
                    year: '2016 - ...',
                },
                {
                    title: 'Compulsory secondary education',
                    content: 'Donetsk specialized school with separate in-depth study of individual subjects №37',
                    color: 'blue-grey',
                    year: '2005 - 2016',
                }
            ]
        })
    }
</script>

<style scoped>

</style>