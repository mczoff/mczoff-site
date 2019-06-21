<template>
    <v-container fluid ma-0 pa-0 id="skills">
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
                                <v-flex xs8>
                                    <v-timeline>
                                        <v-timeline-item
                                            v-for="(year, i) in years"
                                            :key="i"
                                            :color="year.color"
                                            small
                                        >
                                            <template v-slot:opposite>
                                            <span
                                                :class="`headline font-weight-bold ${year.color}--text`"
                                                v-text="year.year"
                                            ></span>
                                            </template>
                                            <div class="py-0">
                                                <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">Lorem ipsum</h2>
                                                <div>
                                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
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
            years: [
                {
                    color: 'cyan',
                    year: '1960'
                },
                {
                    color: 'green',
                    year: '1970'
                },
                {
                    color: 'pink',
                    year: '1980'
                },
                {
                    color: 'amber',
                    year: '1990'
                },
                {
                    color: 'orange',
                    year: '2000'
                }
            ]
        })
    }
</script>

<style scoped>

</style>