<template>
    <v-container fluid ma-0 pa-0 id="experience">
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex>
                <v-card flat color="grey lighten-5">
                    <v-divider></v-divider>
                    <v-card-title>
                        <v-flex ma-3 text-xs-center>
                            <span class="headline font-weight-light blue-grey--text">Experience</span>
                        </v-flex>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-container fluid>
                            <v-layout justify-space-around>
                                <v-flex hidden-sm-and-down xs8>
                                    <v-timeline>
                                        <v-timeline-item
                                                v-for="(experience, i) in experienceList"
                                                :key="i"
                                                :color="experience.color"
                                                small
                                        >
                                            <template v-slot:opposite>
                                            <span
                                                    :class="`headline font-weight-bold ${experience.color}--text`"
                                                    v-text="experience.year"
                                            ></span>
                                            </template>
                                            <div class="py-0">
                                                <h2 :class="`headline font-weight-light mb-3 ${experience.color}--text`">{{experience.title}}</h2>
                                                <div>
                                                    {{experience.content}}
                                                </div>
                                            </div>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-flex>

                                <v-flex hidden-md-and-up xs10>
                                    <v-timeline dense>
                                        <v-timeline-item
                                            v-for="(experience, i) in experienceList"
                                            :key="i"
                                            :color="experience.color"
                                            small
                                        >
                                            <template v-slot:opposite>
                                            <span
                                                    :class="`headline font-weight-bold ${experience.color}--text`"
                                                    v-text="experience.year"
                                            ></span>
                                            </template>
                                            <div class="text-xs-left py-0">
                                                <h2 :class="`headline font-weight-light mb-3 ${experience.color}--text`">{{experience.title}}</h2>
                                                <h4>{{experience.year}}</h4>
                                                <div>
                                                    {{experience.content}}
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
        name: "Experience",
        data: () => ({
            experienceList: [
                {
                    title: 'Middle in development team',
                    content: 'Automotive CCTV systems',
                    color: 'blue-grey',
                    year: '2017 - ...'
                },
                {
                    title: 'Junior in development team',
                    content: 'Flexible pawn shop system',
                    color: 'blue-grey',
                    year: '2016 - 2017'
                }
            ]
        })
    }
</script>

<style scoped>

</style>